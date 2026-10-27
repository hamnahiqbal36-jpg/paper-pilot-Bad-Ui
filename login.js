const $ = selector => document.querySelector(selector);
let authenticatedUser = null;
let firebaseAuth = null;
let googleProvider = null;
let authSdk = null;
let authMode = "signin";
let authInitialized = false;
let authReady = false;
let googleReviewActive = false;
let pendingGoogleUser = null;
let googleSuccessTimer = null;

function notify(message, status = "notice") {
  document.dispatchEvent(new CustomEvent("paperpilot:notify", {
    detail: { message, status }
  }));
}

function navigate(pageId, heading) {
  document.dispatchEvent(new CustomEvent("paperpilot:navigate", {
    detail: { pageId, heading }
  }));
}

function setFeedback(message, status = "") {
  const feedback = $("#authFeedback");
  feedback.textContent = message;
  feedback.dataset.status = status;
  feedback.setAttribute("role", status === "error" ? "alert" : "status");
  feedback.setAttribute("aria-live", status === "error" ? "assertive" : "polite");
  feedback.style.color = status === "error" ? "#b54869" : "";
}

function markInvalidField(field) {
  field.setAttribute("aria-invalid", "true");
}

function authErrorMessage(error) {
  switch (error?.code) {
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Email or password is incorrect.";
    case "auth/email-already-in-use":
      return "An account already exists for this email. Sign in instead.";
    case "auth/weak-password":
      return "Choose a password with at least 6 characters.";
    case "auth/too-many-requests":
      return "Too many attempts. Wait a little and try again.";
    case "auth/user-disabled":
      return "This account has been disabled. Contact the site administrator.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "The Google sign-in window closed before you finished. Choose an account and try again.";
    case "auth/network-request-failed":
      return "A network error interrupted sign-in. Check your connection and try again.";
    case "auth/operation-not-allowed":
      return "Google sign-in is not enabled yet. In Firebase Console, open Authentication > Sign-in method and enable Google.";
    case "auth/unauthorized-domain":
      return `This site is not authorized for Google sign-in (${window.location.hostname}). Add this hostname in Firebase Console > Authentication > Settings > Authorized domains, then reload PaperPilot.`;
    case "auth/popup-blocked":
      return "Your browser blocked the Google sign-in window. Allow pop-ups for this site, then try again.";
    case "auth/web-storage-unsupported":
      return "Google sign-in needs browser storage. Enable cookies and site data for this site, then try again.";
    case "auth/timeout":
      return "Google sign-in took too long. Check your connection and try again.";
    case "auth/account-exists-with-different-credential":
      return "An account already exists with this email. Sign in using the method you used when you created it.";
    case "auth/credential-already-in-use":
      return "This Google account is already linked to another PaperPilot account. Sign in with that account instead.";
    case "auth/invalid-api-key":
      return "Google sign-in could not start because the Firebase API key is invalid. Check the Firebase configuration.";
    case "auth/app-not-authorized":
      return "This PaperPilot app is not authorized in Firebase. Check the Firebase project and authorized domains.";
    case "auth/operation-not-supported-in-this-environment":
      return "Google sign-in needs a supported browser window. Allow pop-ups and open PaperPilot over localhost or HTTPS.";
    case "auth/internal-error":
      return "Firebase encountered an internal error. Check your Firebase configuration and try again.";
    default:
      return "Authentication failed. Please try again.";
  }
}

function updateAuthUI(user) {
  authenticatedUser = user;
  const isLoggedIn = Boolean(user);
  const loginButton = $("#loginNavButton");
  const avatar = $("#userAvatar");
  const logoutButton = $("#logoutNav");

  loginButton?.classList.toggle("hidden", isLoggedIn);
  avatar?.classList.toggle("hidden", !isLoggedIn);
  logoutButton?.classList.toggle("hidden", !isLoggedIn);
  avatar?.replaceChildren();

  if (user?.photoURL) {
    const photo = document.createElement("img");
    photo.src = user.photoURL;
    photo.alt = "";
    avatar?.append(photo);
  } else if (avatar) {
    avatar.textContent = (user?.displayName || user?.email || "A").trim().charAt(0).toUpperCase();
  }

  avatar?.setAttribute("aria-label", isLoggedIn
    ? `Signed in as ${user.displayName || user.email || "user"}`
    : "Account signed in");
  document.dispatchEvent(new CustomEvent("paperpilot:auth-state", {
    detail: { user, isLoggedIn }
  }));
}

function setBusy(isBusy, isGoogleSignIn = false) {
  const googleButton = $("#google-login-btn");
  googleButton.disabled = isBusy;
  googleButton.setAttribute("aria-busy", String(isBusy && isGoogleSignIn));
  const googleLabel = $("#google-login-label");
  if (googleLabel) {
    googleLabel.textContent = isBusy && isGoogleSignIn
      ? "Signing in... Please wait"
      : "Continue with Google";
  }
  $("#emailLoginSubmit").disabled = isBusy;
  $("#createAccountButton")?.toggleAttribute("disabled", isBusy);
  $("#authModeToggle")?.toggleAttribute("disabled", isBusy);
}

function setAuthAvailability(isAvailable, unavailableLabel = "Sign-in unavailable") {
  $("#google-login-btn").disabled = !isAvailable;
  $("#google-login-label").textContent = isAvailable
    ? "Continue with Google"
    : unavailableLabel;
  $("#emailLoginSubmit").disabled = !isAvailable;
  $("#createAccountButton")?.toggleAttribute("disabled", !isAvailable);
}

function setAuthMode(mode) {
  authMode = mode;
  const isSignup = mode === "signup";
  $("#loginNameField").classList.toggle("hidden", !isSignup);
  $("#loginName").required = isSignup && document.body.dataset.authPage !== "login";
  $("#loginPassword").autocomplete = isSignup ? "new-password" : "current-password";
  const submitButton = $("#emailLoginSubmit");
  if (!$("#createAccountButton") && submitButton) {
    submitButton.textContent = isSignup ? "Create account" : "Sign in";
  }
  if ($("#authModeToggle")) {
    $("#authModeToggle").textContent = isSignup
      ? "Already have an account? Sign in"
      : "Create an account";
  }
  setFeedback("");
}

async function handleGoogleLogin() {
  if (window.location.protocol === "file:") {
    setFeedback("Firebase sign-in needs an HTTP or HTTPS address. Open PaperPilot through localhost or its hosted website.", "error");
    return;
  }
  if (!authReady || !firebaseAuth || !authSdk) {
    setFeedback(authReady
      ? "Firebase is not configured. Check firebase.js and Firebase Authentication settings."
      : "Firebase is still loading. Please try again in a moment.", "error");
    return;
  }

  setBusy(true, true);
  googleReviewActive = true;
  announceGoogleToast("Choose your Google account to continue to PaperPilot");
  setFeedback("Choose your Google account to continue to PaperPilot");
  try {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    const result = await authSdk.signInWithPopup(firebaseAuth, googleProvider);
    pendingGoogleUser = result.user;
    showGoogleAccountConfirmation(result.user);
  } catch (error) {
    googleReviewActive = false;
    pendingGoogleUser = null;
    console.error("PaperPilot Google sign-in failed:", error);
    setFeedback(authErrorMessage(error), "error");
  } finally {
    setBusy(false);
  }
}

function showGoogleAccountConfirmation(user) {
  const modal = $("#googleAccountModal");
  if (!modal) {
    setFeedback("Could not open account confirmation. Please try Google sign-in again.", "error");
    authSdk.signOut(firebaseAuth).then(() => {
      googleReviewActive = false;
      pendingGoogleUser = null;
      updateAuthUI(null);
    }).catch(error => {
      console.error("Could not cancel unconfirmed Google sign-in:", error);
    });
    return;
  }

  const photo = $("#googleReviewPhoto");
  const initials = $("#googleReviewInitial");
  $("#googleReviewName").textContent = user.displayName || "Google account";
  $("#googleReviewEmail").textContent = user.email || "";
  initials.textContent = (user.displayName || user.email || "G").trim().charAt(0).toUpperCase();
  photo.hidden = !user.photoURL;
  initials.hidden = Boolean(user.photoURL);
  if (user.photoURL) photo.src = user.photoURL;
  $("#googleReviewError").textContent = "";
  $("#confirmGoogleReview").textContent = "Yes, sign in";
  modal.hidden = false;
  setFeedback("Review the selected Google account to continue.");
  $("#cancelGoogleReview").focus();
}

function closeGoogleAccountConfirmation() {
  const modal = $("#googleAccountModal");
  const cancelButton = $("#cancelGoogleReview");
  const confirmButton = $("#confirmGoogleReview");
  const error = $("#googleReviewError");
  if (!modal || !pendingGoogleUser || cancelButton.disabled || confirmButton.disabled) return;

  cancelButton.disabled = true;
  confirmButton.disabled = true;
  cancelButton.textContent = "Canceling...";
  error.textContent = "";
  authSdk.signOut(firebaseAuth).then(() => {
    googleReviewActive = false;
    pendingGoogleUser = null;
    modal.hidden = true;
    cancelButton.disabled = false;
    confirmButton.disabled = false;
    cancelButton.textContent = "No, cancel";
    authInitialized = true;
    updateAuthUI(null);
    setFeedback("Google sign-in canceled. You are not signed in.", "notice");
    $("#google-login-btn").focus();
  }).catch(signOutError => {
    console.error("Could not cancel unconfirmed Google sign-in:", signOutError);
    error.textContent = "We couldn’t cancel sign-in. Try again, or choose Yes, sign in.";
    cancelButton.disabled = false;
    confirmButton.disabled = false;
    cancelButton.textContent = "No, cancel";
  });
}

function confirmGoogleAccount() {
  if (!pendingGoogleUser || !googleReviewActive) return;

  const user = pendingGoogleUser;
  googleReviewActive = false;
  pendingGoogleUser = null;
  $("#googleAccountModal").hidden = true;
  authInitialized = true;
  updateAuthUI(user);

  showGoogleSignInSuccess(user);
}

function announceGoogleToast(message) {
  if (document.body.dataset.authPage === "login") {
    const toast = $("#googleLoginToast");
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toast.hideTimer);
    toast.hideTimer = setTimeout(() => {
      toast.hidden = true;
    }, 3500);
    return;
  }
  notify(message);
}

function goToDashboard() {
  clearTimeout(googleSuccessTimer);
  document.removeEventListener("keydown", handleGoogleSuccessKeydown);
  const successModal = $("#googleSuccessModal");
  if (successModal) successModal.hidden = true;

  if (document.body.dataset.authPage === "login") {
    window.location.replace("dashboard.html");
  } else {
    navigate("dashboard-view", "Dashboard");
  }
}

function showGoogleSignInSuccess(user) {
  const modal = $("#googleSuccessModal");
  if (!modal) {
    goToDashboard();
    return;
  }

  const userName = user.displayName || "PaperPilot user";
  const userEmail = user.email || "";
  $("#googleSuccessMessage").textContent =
    `Welcome! You have signed in to PaperPilot as ${userName}${userEmail ? ` (${userEmail})` : ""}.`;
  modal.hidden = false;
  const dashboardButton = $("#googleSuccessDashboard");
  dashboardButton.focus();
  announceGoogleToast("Successfully signed in to PaperPilot.");
  document.addEventListener("keydown", handleGoogleSuccessKeydown);
  googleSuccessTimer = setTimeout(goToDashboard, 2000);
}

function handleGoogleSuccessKeydown(event) {
  const modal = $("#googleSuccessModal");
  if (!modal || modal.hidden) return;
  if (event.key === "Escape" || event.key === "Tab") {
    event.preventDefault();
    $("#googleSuccessDashboard").focus();
  }
}

function initializeGoogleAccountConfirmation() {
  const modal = $("#googleAccountModal");
  if (!modal) return;

  const cancelButton = $("#cancelGoogleReview");
  const confirmButton = $("#confirmGoogleReview");
  cancelButton.addEventListener("click", closeGoogleAccountConfirmation);
  confirmButton.addEventListener("click", confirmGoogleAccount);
  modal.addEventListener("click", event => {
    if (event.target === modal) closeGoogleAccountConfirmation();
  });
  document.addEventListener("keydown", event => {
    if (modal.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeGoogleAccountConfirmation();
    } else if (event.key === "Tab") {
      const focusable = [cancelButton, confirmButton].filter(button => !button.disabled);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!modal.querySelector('[role="dialog"]').contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  $("#googleSuccessDashboard")?.addEventListener("click", goToDashboard);
}

async function handleEmailLogin(event) {
  event.preventDefault();
  if (event.submitter?.dataset.authMode) {
    setAuthMode(event.submitter.dataset.authMode);
  }
  if (window.location.protocol === "file:") {
    setFeedback("Firebase sign-in needs an HTTP or HTTPS address. Open PaperPilot through localhost or its hosted website.", "error");
    return;
  }
  if (!authReady || !firebaseAuth || !authSdk) {
    setFeedback(authReady
      ? "Firebase is not configured. Check firebase.js and Firebase Authentication settings."
      : "Firebase is still loading. Please try again in a moment.", "error");
    return;
  }

  const email = $("#loginEmail").value.trim();
  const password = $("#loginPassword").value;
  const name = $("#loginName").value.trim();
  [$("#loginName"), $("#loginEmail"), $("#loginPassword")].forEach(field => {
    field.removeAttribute("aria-invalid");
  });
  if (authMode === "signup" && !name) {
    setFeedback("Enter your name to create an account.", "error");
    markInvalidField($("#loginName"));
    $("#loginName").focus();
    return;
  }
  if (!email) {
    setFeedback("Enter your email address.", "error");
    markInvalidField($("#loginEmail"));
    $("#loginEmail").focus();
    return;
  }
  if (!password) {
    setFeedback("Enter your password.", "error");
    markInvalidField($("#loginPassword"));
    $("#loginPassword").focus();
    return;
  }
  if (authMode === "signup" && password.length < 6) {
    setFeedback("Use a password with at least 6 characters.", "error");
    markInvalidField($("#loginPassword"));
    $("#loginPassword").focus();
    return;
  }

  setBusy(true);
  setFeedback(authMode === "signup" ? "Creating your account..." : "Signing in...");
  try {
    if (authMode === "signup") {
      const credential = await authSdk.createUserWithEmailAndPassword(firebaseAuth, email, password);
      await authSdk.updateProfile(credential.user, { displayName: name });
    } else {
      await authSdk.signInWithEmailAndPassword(firebaseAuth, email, password);
    }
  } catch (error) {
    console.error(`PaperPilot ${authMode} failed:`, error);
    if (error?.code === "auth/invalid-email") {
      markInvalidField($("#loginEmail"));
      $("#loginEmail").focus();
    }
    setFeedback(authErrorMessage(error), "error");
  } finally {
    setBusy(false);
  }
}

["#loginName", "#loginEmail", "#loginPassword"].forEach(selector => {
  $(selector).addEventListener("input", event => {
    event.currentTarget.removeAttribute("aria-invalid");
    if ($("#authFeedback").dataset.status === "error") setFeedback("");
  });
});

async function handleLogout() {
  if (!firebaseAuth || !authSdk || !authenticatedUser) return;
  const modal = $("#logoutConfirmModal");
  if (!modal) return;

  const cancelButton = $("#cancelLogoutConfirm");
  const confirmButton = $("#confirmLogoutConfirm");
  const errorMessage = $("#logoutConfirmError");
  const dialog = modal.querySelector('[role="dialog"]');
  const previousFocus = document.activeElement;
  const closeModal = () => {
    if (confirmButton.disabled) return;
    modal.classList.add("hidden");
    errorMessage.textContent = "";
    cleanup();
    previousFocus?.focus();
  };

  errorMessage.textContent = "";
  confirmButton.disabled = false;
  cancelButton.disabled = false;
  confirmButton.textContent = "Yes, Logout";
  modal.classList.remove("hidden");
  cancelButton.focus();

  const onKeydown = event => {
    if (modal.classList.contains("hidden")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
    } else if (event.key === "Tab") {
      const focusable = [cancelButton, confirmButton].filter(button => !button.disabled);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  const cleanup = () => {
    document.removeEventListener("keydown", onKeydown);
    cancelButton.removeEventListener("click", closeModal);
    modal.removeEventListener("click", onBackdropClick);
    confirmButton.removeEventListener("click", confirmLogout);
  };
  const onBackdropClick = event => {
    if (event.target === modal) closeModal();
  };
  const confirmLogout = async () => {
    if (confirmButton.disabled) return;
    confirmButton.disabled = true;
    cancelButton.disabled = true;
    confirmButton.textContent = "Logging out...";
    errorMessage.textContent = "";
    try {
      await authSdk.signOut(firebaseAuth);
      modal.classList.add("hidden");
      cleanup();
    } catch (error) {
      console.error("PaperPilot logout failed:", error);
      errorMessage.textContent = authErrorMessage(error);
      confirmButton.disabled = false;
      cancelButton.disabled = false;
      confirmButton.textContent = "Yes, Logout";
    }
  };

  document.addEventListener("keydown", onKeydown);
  cancelButton.addEventListener("click", closeModal);
  modal.addEventListener("click", onBackdropClick);
  confirmButton.addEventListener("click", confirmLogout);
}

$("#google-login-btn").addEventListener("click", handleGoogleLogin);
initializeGoogleAccountConfirmation();
$("#emailLoginForm").addEventListener("submit", handleEmailLogin);
$("#authModeToggle")?.addEventListener("click", () => {
  setAuthMode(authMode === "signin" ? "signup" : "signin");
});
$("#logoutNav")?.addEventListener("click", handleLogout);
$("#userAvatar")?.addEventListener("click", () => {
  if (authenticatedUser) navigate("myFilesPage", "My Uploads");
});

setAuthMode("signin");

async function initializeAuth() {
  try {
    const [firebaseModule, sdk] = await Promise.all([
      import("./firebase.js"),
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js")
    ]);
    firebaseAuth = firebaseModule.auth;
    googleProvider = firebaseModule.googleProvider;
    authSdk = sdk;
    authReady = true;

    if (!firebaseAuth) {
      updateAuthUI(null);
      setAuthAvailability(false);
      setFeedback("Firebase is not configured. Check firebase.js and Firebase Authentication settings.", "error");
      return;
    }

    setAuthAvailability(true);
    setFeedback("");
    authSdk.onAuthStateChanged(firebaseAuth, user => {
      if (googleReviewActive) return;
      const hadUser = Boolean(authenticatedUser);
      updateAuthUI(user);
      if (document.body.dataset.authPage === "login" && user) {
        window.location.replace("dashboard.html");
        return;
      }
      if (authInitialized && user && !hadUser) {
        if ($("#login-view")?.classList.contains("active")) {
          navigate("dashboard-view", "Dashboard");
        }
        notify("You are signed in.");
      } else if (authInitialized && !user && hadUser) {
        navigate("dashboard-view", "Dashboard");
        notify("You have been logged out.");
      }
      authInitialized = true;
    }, error => {
      console.error("Could not verify the PaperPilot Firebase session:", error);
      updateAuthUI(null);
      setAuthAvailability(false);
      setFeedback("Could not verify your Firebase session. Reload the page and try again.", "error");
    });
  } catch (error) {
    console.error("PaperPilot Firebase initialization failed:", error);
    authReady = true;
    updateAuthUI(null);
    setAuthAvailability(false);
    setFeedback("Firebase could not load. Check your internet connection, firebase.js configuration, and open the site through localhost or HTTPS.", "error");
  }
}

initializeAuth();

if (window.location.protocol === "file:") {
  updateAuthUI(null);
  setAuthAvailability(false, "Open PaperPilot on localhost");
  setFeedback("Firebase sign-in requires HTTP or HTTPS. Run PaperPilot with Live Server and add localhost to Firebase Authorized domains.", "error");
}
