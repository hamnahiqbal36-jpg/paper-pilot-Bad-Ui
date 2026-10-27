const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/* =====================================================
   1. MUET DEPARTMENTS AND SEMESTER-WISE SUBJECTS
   Based on the course lists supplied by the user.
   Verify the applicable official curriculum for each batch.
===================================================== */

const departments = [
  {
    name: "Software Engineering",
    degree: "B.E.",
    icon: "⌘",
    description: "Software design, development, testing and project management.",
    semesters: [
      [
        "Applied Calculus",
        "Programming Fundamentals",
        "Introduction to Information and Communication Technologies (ICT)",
        "Functional English",
        "Applied Physics"
      ],
      [
        "Object-Oriented Programming (OOP)",
        "Professional Practices",
        "Linear Algebra and Analytical Geometry",
        "Introduction to Software Engineering",
        "Pakistan Studies",
        "Islamic Studies / Ethics"
      ],
      [
        "Data Structures and Algorithms",
        "Database Systems",
        "Software Requirements Engineering",
        "Software Economics and Management",
        "Operations Research"
      ],
      [
        "Operating Systems",
        "Computer Networks",
        "Software Design and Architecture",
        "Data Warehousing",
        "Communication Skills",
        "Statistics and Probability"
      ],
      [
        "Software Construction and Development",
        "Information Security",
        "Web Engineering",
        "Technical and Business Writing",
        "Agent-Based Intelligent Systems",
        "Human-Computer Interaction (HCI) / relevant elective"
      ],
      [
        "Software Project Management",
        "Discrete Structures",
        "Data Science and Analytics",
        "Mobile Application Development",
        "Software Quality Engineering / relevant elective"
      ],
      [
        "Simulation and Modeling",
        "Software Quality Engineering",
        "Entrepreneurship and Creativity",
        "Thesis / Final Year Project I"
      ],
      [
        "Multimedia Communication",
        "Cloud Computing",
        "Software Re-engineering",
        "Thesis / Final Year Project II"
      ]
    ]
  },

  {
    name: "Computer Systems Engineering",
    degree: "B.E.",
    icon: "⚙",
    description: "Computer hardware, systems, networks and embedded technology.",
    semesters: [
      [
        "Applied Calculus",
        "Introduction to Information and Communication Technologies",
        "Computer Programming",
        "Functional English",
        "Basic Electrical Engineering"
      ],
      [
        "Linear Algebra and Analytical Geometry",
        "Electronic Circuits and Devices",
        "Object-Oriented Programming",
        "Islamic Studies / Ethics",
        "Pakistan Studies"
      ],
      [
        "Digital Logic and Design",
        "Communication Skills",
        "Data Structures and Algorithms",
        "Discrete Structures",
        "Differential Equations",
        "Engineering Economics and Project Management"
      ],
      [
        "Signals and Systems",
        "Fourier Series and Transforms",
        "Database Management Systems",
        "Computer Architecture and Assembly Programming",
        "Operating Systems"
      ],
      [
        "Microprocessors and Interfacing",
        "Computer Networks",
        "Software Engineering",
        "Statistics and Probability",
        "Web Engineering"
      ],
      [
        "Technical and Scientific Writing",
        "System and Network Security",
        "Artificial Intelligence",
        "Embedded Systems",
        "Digital Image Processing",
        "Community Service"
      ],
      [
        "Computer Engineering Depth Elective",
        "Mobile Application and Game Development",
        "Data Science and Analytics",
        "Entrepreneurship",
        "Final Year Project I"
      ],
      [
        "Cloud and Distributed Computing",
        "Multidisciplinary Engineering Elective",
        "Human-Computer Interaction",
        "Organizational Behavior",
        "Final Year Project II"
      ]
    ]
  },

  {
    name: "Electronic Engineering",
    degree: "B.E.",
    icon: "ϟ",
    description: "Electronics, circuits, digital systems and control technologies.",
    semesters: [
      [
        "Functional English",
        "Applied Calculus",
        "Applied Physics",
        "Electrical Circuits",
        "Electronics Workshop",
        "Introduction to Computing"
      ],
      [
        "Linear Algebra and Analytical Geometry",
        "Computer Programming",
        "Basic Electronics",
        "Professional Ethics",
        "Pakistan Studies",
        "Islamic Studies / Ethics"
      ],
      [
        "Differential Equations and Fourier Series",
        "Electronic Circuit Design",
        "Digital Electronics",
        "Measurements and Instrumentation",
        "Communication Skills",
        "Computer-Aided Engineering Design"
      ],
      [
        "Complex Variables and Transforms",
        "Electrical Machines",
        "Probability and Random Signals",
        "Electromagnetic Field Theory",
        "Integrated Electronics",
        "Introduction to Embedded Systems"
      ],
      [
        "Technical and Scientific Writing",
        "Entrepreneurship",
        "Signals and Systems",
        "Power Electronics",
        "Numerical Methods"
      ],
      [
        "Digital Signal Processing",
        "Control Systems",
        "Sociology for Engineers",
        "FPGA-Based Digital Design",
        "Communication Systems",
        "Community Service"
      ],
      [
        "Digital Control System",
        "Engineering Management",
        "Optoelectronics",
        "Artificial Intelligence and Edge Computing",
        "Electronic Engineering Project I"
      ],
      [
        "Industrial Electronics",
        "Robotics and Mechatronic Systems Design",
        "Computer Communication and Networking",
        "Electronic Engineering Project II"
      ]
    ]
  },

  {
    name: "Telecommunication Engineering",
    degree: "B.E.",
    icon: "⌁",
    description: "Communication systems, wireless networks and signal processing.",
    semesters: [
      [
        "Applied Calculus",
        "Applied Physics",
        "Introduction to Computing and Programming",
        "Functional English",
        "Islamic Studies / Ethics",
        "Pakistan Studies"
      ],
      [
        "Basic Electronics",
        "Object-Oriented Programming",
        "Introduction to Simulation",
        "Circuit Analysis",
        "Linear Algebra and Analytical Geometry"
      ],
      [
        "Amplifiers and Oscillators",
        "Digital Logic Design",
        "Differential Equations and Fourier Series",
        "Engineering Management",
        "Communication Skills",
        "Occupational Health and Safety"
      ],
      [
        "Microprocessors and Microcontrollers",
        "Technical Report Writing Skills",
        "Entrepreneurship",
        "Complex Variables and Transforms",
        "Telecommunication Policies and Standards",
        "Professional Ethics"
      ],
      [
        "Communication Systems",
        "Electromagnetics",
        "Probability and Stochastic Processes",
        "Signals and Systems",
        "Numerical Analysis and Computer Applications"
      ],
      [
        "Digital Communication",
        "Computer Communication and Networking",
        "Optoelectronics",
        "Antennas and Wave Propagation",
        "Digital Signal Processing",
        "Community Service"
      ],
      [
        "Microwave Engineering",
        "Fiber Optic Communication Systems",
        "Queueing Theory",
        "Wireless Communications",
        "Telecommunication Studio",
        "Thesis / Project"
      ],
      [
        "Satellite and Radar Communications",
        "Emerging Wireless Technologies and RF Planning",
        "Network Protocols and Architecture",
        "Transmission and Switching Systems",
        "Thesis / Project"
      ]
    ]
  },

  {
    name: "Textile Engineering",
    degree: "B.E.",
    icon: "▦",
    description: "Textile fibres, yarn, fabrics, manufacturing and quality control.",
    semesters: [
      [
        "Introduction to Textile Engineering",
        "Applied Chemistry",
        "Engineering Drawing",
        "Electrical Engineering",
        "Calculus",
        "Islamic Studies / Ethics",
        "Pakistan Studies"
      ],
      [
        "Textile Raw Materials",
        "Textile Mechanics",
        "Electronics Engineering",
        "Differential Equations and Laplace Transform",
        "Functional English",
        "Workshop Practice"
      ],
      [
        "Fibre Science",
        "Yarn Manufacturing – I",
        "Applied Physics",
        "Introduction to Computers and C++ Programming",
        "Textile Engineering Utilities and Services"
      ],
      [
        "Synthetic Fibre Manufacturing",
        "Yarn Manufacturing – II",
        "Fabric Manufacturing – I",
        "Textile Pretreatment",
        "Numerical Analysis and Computer Applications"
      ],
      [
        "Yarn Manufacturing – III",
        "Fabric Manufacturing – II",
        "Textile Dyes and Dyeing",
        "Automation and Control Engineering",
        "Communication Skills"
      ],
      [
        "Yarn Manufacturing – IV",
        "Fabric Design and Structure",
        "Textile Testing and Quality Control",
        "Colour Physics",
        "Environmental Engineering",
        "Statistics and Probability"
      ],
      [
        "Fabric Manufacturing – III",
        "Textile Printing",
        "Textile Marketing and Merchandising",
        "Technical and Scientific Writing",
        "Entrepreneurship",
        "Thesis / Project I"
      ],
      [
        "Yarn Manufacturing – V",
        "Fabric Manufacturing – IV",
        "Textile Finishing",
        "Production Management",
        "Thesis / Project II"
      ]
    ]
  }
];

/* =====================================================
   2. STORAGE AND DEMO RESOURCE DATA
===================================================== */

const defaultResources = [
  {
    id: "demo-1",
    title: "Programming Fundamentals — Sample Notes",
    department: "Software Engineering",
    semester: 1,
    subject: "Programming Fundamentals",
    type: "Notes",
    format: "PDF",
    uploader: "PaperPilot Demo",
    description: "Example resource entry. This is not an actual course PDF.",
    filename: "programming-fundamentals-demo.pdf",
    demo: true
  },
  {
    id: "demo-2",
    title: "OOP — Sample Slides",
    department: "Software Engineering",
    semester: 2,
    subject: "Object-Oriented Programming (OOP)",
    type: "PPT",
    format: "PPTX",
    uploader: "PaperPilot Demo",
    description: "Example presentation entry.",
    filename: "oop-slides-demo.pptx",
    demo: true
  },
  {
    id: "demo-3",
    title: "Computer Networks — Sample Viva Questions",
    department: "Software Engineering",
    semester: 4,
    subject: "Computer Networks",
    type: "Viva Questions",
    format: "PDF",
    uploader: "PaperPilot Demo",
    description: "Example viva resource entry.",
    filename: "computer-networks-viva-demo.pdf",
    demo: true
  }
];

function loadStored(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

let resources = loadStored("paperpilot_muet_resources", defaultResources);

let selectedDepartment = "";
let selectedSemester = 1;
let selectedSubject = "";
let currentFilter = "All";
let currentResource = null;
let previousPage = "subjectPage";
let selectedFiles = [];
let restoredDraftFiles = [];
let uploaderNameTouched = false;
let activeUploadsTab = "uploads";
let pendingDeleteId = null;
const uploadFileObjects = new Map();
let toastTimer;
let isLoggedIn = false;
let authenticatedUser = null;

function saveResources() {
  // Browser object URLs are temporary and must not be treated as permanent links.
  const safeResources = resources.map(({ objectUrl, ...resource }) => resource);
  localStorage.setItem("paperpilot_muet_resources", JSON.stringify(safeResources));
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  const toggle = $("#themeToggle");

  document.body.dataset.theme = isDark ? "dark" : "light";
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  toggle.title = `Switch to ${isDark ? "light" : "dark"} theme`;
  toggle.querySelector("span").textContent = isDark ? "☀" : "☾";
  toggle.querySelector(".theme-label").textContent = isDark ? "Light mode" : "Dark mode";
  localStorage.setItem("paperpilot_muet_theme", theme);
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getDepartment(name) {
  return departments.find(department => department.name === name);
}

function getSubjects(departmentName, semester) {
  const department = getDepartment(departmentName);
  return department?.semesters[Number(semester) - 1] || [];
}

function showToast(message, status = "notice", duration = 3000) {
  const toast = $("#toast");
  toast.dataset.status = status;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), duration);
}

function syncStyledSelects() {
  $$(".select-native").forEach(select => select.syncStyledSelect?.());
}

/* =====================================================
   3. DROPDOWNS AND DEPARTMENT CARDS
===================================================== */

function populateDepartmentDropdowns() {
  const options = departments.map(department =>
    `<option value="${escapeHTML(department.name)}">${escapeHTML(department.name)}</option>`
  ).join("");

  $("#departmentSelect").insertAdjacentHTML("beforeend", options);
  $("#libraryDepartment").insertAdjacentHTML("beforeend", options);
}

function initializeStyledSelects() {
  const fallbackLabels = {
    libraryDepartment: "Department",
    libraryType: "Resource type"
  };

  $$("select").forEach(select => {
    const label = select.closest("label");
    const requiredMarker = label?.querySelector(".required-mark");
    const labelTextElement = label?.querySelector(".field-label-text");
    const labelTextSource = labelTextElement || label;
    const labelText = label
      ? [...labelTextSource.childNodes]
        .filter(node => node.nodeType === Node.TEXT_NODE && node !== requiredMarker)
        .map(node => node.textContent.trim())
        .join(" ")
        .replace(/\s+/g, " ")
      : "";
    const accessibleLabel = requiredMarker ? `${labelText} *` : labelText;
    const accessibleName = select.getAttribute("aria-label") ||
      accessibleLabel || fallbackLabels[select.id] || "Choose an option";
    const field = document.createElement("div");
    field.className = "select-field";
    const control = document.createElement("div");
    control.className = "select-control";

    if (label) {
      const caption = document.createElement("span");
      caption.className = "select-field-label";
      caption.classList.add(...label.classList);
      caption.append(document.createTextNode(labelText));
      if (requiredMarker) {
        caption.append(document.createTextNode(" "), requiredMarker.cloneNode(true));
      }
      caption.id = `${select.id}-label`;
      label.parentNode.insertBefore(field, label);
      label.remove();
      field.append(caption, control);
    } else {
      select.parentNode.insertBefore(field, select);
      field.append(control);
    }

    control.append(select);
    select.classList.add("select-native");
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "select-trigger";
    trigger.setAttribute("role", "combobox");
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", accessibleName);
    trigger.setAttribute("aria-controls", `${select.id}-listbox`);
    if (select.required) trigger.setAttribute("aria-required", "true");

    const value = document.createElement("span");
    value.className = "select-value";
    const chevron = document.createElement("span");
    chevron.className = "select-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "⌄";
    trigger.append(value, chevron);

    const menu = document.createElement("div");
    menu.className = "custom-select-menu";
    menu.id = `${select.id}-listbox`;
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-label", `${accessibleName} options`);
    menu.hidden = true;
    control.append(trigger, menu);

    const error = document.createElement("span");
    error.className = "select-error";
    error.id = `${select.id}-error`;
    error.hidden = true;
    field.append(error);

    const closeMenu = () => {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      control.classList.remove("is-open");
    };

    const focusOption = index => {
      const options = [...menu.querySelectorAll(".custom-select-option:not(:disabled)")];
      if (!options.length) return;
      options[Math.max(0, Math.min(index, options.length - 1))].focus();
    };

    const openMenu = () => {
      if (select.disabled) return;
      menu.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      control.classList.add("is-open");
      const selectedIndex = [...menu.children].findIndex(item => item.getAttribute("aria-selected") === "true");
      focusOption(selectedIndex < 0 ? 0 : selectedIndex);
    };

    const sync = () => {
      const selected = select.selectedOptions[0];
      value.textContent = selected?.textContent || "Choose an option";
      trigger.disabled = select.disabled;
      control.classList.toggle("is-disabled", select.disabled);
      menu.replaceChildren();

      [...select.options].forEach((option, index) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "custom-select-option";
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", String(option.selected));
        item.dataset.optionIndex = String(index);
        item.textContent = option.textContent;
        item.disabled = option.disabled || select.disabled;
        if (option.hidden) item.hidden = true;
        menu.append(item);
      });

      if (select.value && field.classList.contains("is-invalid")) {
        field.classList.remove("is-invalid");
        error.hidden = true;
        trigger.removeAttribute("aria-invalid");
        trigger.removeAttribute("aria-describedby");
      }
    };

    select.syncStyledSelect = sync;
    select.addEventListener("change", sync);
    select.addEventListener("input", sync);
    select.addEventListener("invalid", event => {
      event.preventDefault();
      field.classList.add("is-invalid");
      error.textContent = `${accessibleName} is required.`;
      error.hidden = false;
      trigger.setAttribute("aria-invalid", "true");
      trigger.setAttribute("aria-describedby", error.id);
      trigger.focus();
    });
    select.form?.addEventListener("reset", () => queueMicrotask(sync));

    trigger.addEventListener("click", () => {
      if (menu.hidden) openMenu();
      else closeMenu();
    });
    trigger.addEventListener("keydown", event => {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        openMenu();
      }
    });

    menu.addEventListener("click", event => {
      const item = event.target.closest("[data-option-index]");
      if (!item || item.disabled) return;
      const option = select.options[Number(item.dataset.optionIndex)];
      if (!option) return;
      select.value = option.value;
      select.dispatchEvent(new Event("input", { bubbles: true }));
      select.dispatchEvent(new Event("change", { bubbles: true }));
      closeMenu();
      trigger.focus();
    });

    menu.addEventListener("keydown", event => {
      const options = [...menu.querySelectorAll(".custom-select-option:not(:disabled)")];
      const currentIndex = options.indexOf(document.activeElement);
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        trigger.focus();
      } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        const nextIndex = event.key === "Home" ? 0
          : event.key === "End" ? options.length - 1
            : currentIndex + (event.key === "ArrowDown" ? 1 : -1);
        focusOption(nextIndex);
      }
    });

    sync();
  });

  document.addEventListener("click", event => {
    $$(".select-control.is-open").forEach(control => {
      if (!control.contains(event.target)) {
        control.querySelector(".select-trigger")?.click();
      }
    });
  });
}

function renderDepartmentCards() {
  const cards = departments.map(department => `
    <button class="department-card"
      data-department="${escapeHTML(department.name)}">
    <h3>${escapeHTML(department.name)}</h3>
    <p class="department-card-degree">${escapeHTML(department.degree)} · 8 Semesters</p>
    <p class="department-card-description">${escapeHTML(department.description)}</p>
    <span class="department-card-action">View semesters →</span>
    </button>
  `).join("");
  $("#browseDepartmentGrid").innerHTML = cards;
}

/* =====================================================
   4. PAGE NAVIGATION
===================================================== */

function showPage(pageId, heading, updateHistory = true) {
  $$(".page").forEach(page => {
    page.classList.toggle("active", page.id === pageId);
  });
  document.body.classList.toggle("semester-subjects-active", pageId === "semesterSubjectsPage");

  if (updateHistory) {
    history.pushState({
      paperPilotPage: pageId,
      heading,
      department: selectedDepartment,
      semester: selectedSemester,
      subject: selectedSubject,
      previousPage
    }, "");
  }

  $$(".nav-link").forEach(link => link.classList.remove("active"));

  const navMap = {
    "dashboard-view": ".nav-link[data-home]",
    "departments-view": "#allSubjectsBtn",
    semesterSubjectsPage: "#allSubjectsBtn",
    subjectPage: "#resourcesNav",
    libraryPage: "#resourcesNav",
    downloadPage: "#resourcesNav",
    uploadPage: "#uploadNav"
  };

  const activeLink = navMap[pageId] ? document.querySelector(navMap[pageId]) : null;
  if (activeLink) {
    activeLink.classList.add("active");
    activeLink.setAttribute("aria-current", "page");
  }
  $$(".nav-link").forEach(link => {
    if (link !== activeLink) link.removeAttribute("aria-current");
  });

  const topHeading = $("#topHeading");
  if (topHeading) topHeading.textContent = heading;
  $("#searchResults").classList.add("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
  syncStyledSelects();
}

document.addEventListener("paperpilot:navigate", event => {
  const { pageId, heading } = event.detail;
  showPage(pageId, heading);
});

document.addEventListener("paperpilot:auth-state", event => {
  authenticatedUser = event.detail.user;
  updateAuthUI();
});

document.addEventListener("paperpilot:notify", event => {
  showToast(event.detail.message, event.detail.status);
});

function goHome() {
  showPage("dashboard-view", "Dashboard");
}

function updateAuthUI() {
  isLoggedIn = Boolean(authenticatedUser);
  localStorage.setItem("isLoggedIn", String(isLoggedIn));
  if (authenticatedUser?.displayName) {
    localStorage.setItem("paperpilot_user", authenticatedUser.displayName);
  } else if (!authenticatedUser) {
    localStorage.removeItem("paperpilot_user");
  }
  renderWelcome();
}

function openLogin(reason = "", updateHistory = true) {
  const requirement = $("#loginRequirement");
  const requirementTitle = $("#loginRequirementTitle");
  const requirementMessage = $("#loginRequirementMessage");
  const loginRequirements = {
    upload: {
      title: "Sign in to upload a resource",
      message: "Sign in or create an account before uploading. Your account helps you manage the resources you share."
    },
    uploads: {
      title: "Sign in to view your upload history",
      message: "Sign in or create an account to see the resources you have uploaded."
    },
    downloads: {
      title: "Sign in to view your download history",
      message: "Sign in or create an account to see the resources you have downloaded."
    }
  };
  const loginRequirement = loginRequirements[reason];
  requirement.classList.toggle("hidden", !loginRequirement);
  requirementTitle.textContent = loginRequirement?.title || "";
  requirementMessage.textContent = loginRequirement?.message || "";

  const feedback = $("#authFeedback");
  if (window.location.protocol !== "file:") {
    feedback.textContent = "";
    delete feedback.dataset.status;
  }
  if (window.location.protocol === "file:") {
    feedback.textContent = "Firebase sign-in needs an HTTP or HTTPS address. Open PaperPilot through localhost or its hosted website.";
    feedback.dataset.status = "error";
  }
  showPage("login-view", "Login", updateHistory);
}

function openBrowseDepartments(updateHistory = true) {
  selectedDepartment = "";
  $("#departmentTitle").textContent = "Browse Departments";
  $("#departmentDescription").textContent = "Choose a department to explore its semesters and subjects.";
  $("#departmentDescription").classList.add("hidden");
  $("#browseDepartmentGrid").classList.remove("hidden");
  $("#browseAllDepartments").classList.add("hidden");
  $("#semesterGrid").classList.add("hidden");
  showPage("departments-view", "Browse Departments", updateHistory);
}

/* =====================================================
   5. DEPARTMENT → SEMESTER → SUBJECT
===================================================== */

function openDepartment(departmentName, updateHistory = true) {
  const department = getDepartment(departmentName);
  if (!department) return;

  selectedDepartment = departmentName;
  selectedSemester = 1;

  $("#departmentTitle").textContent = `${department.name} (${department.degree})`;
  $("#departmentDescription").textContent =
    `${department.description} Select a semester to view its complete subject list.`;
  $("#departmentDescription").classList.remove("hidden");

  renderSemesters();
  $("#browseDepartmentGrid").classList.add("hidden");
  $("#browseAllDepartments").classList.remove("hidden");
  $("#semesterGrid").classList.remove("hidden");
  showPage("departments-view", department.name, updateHistory);
}

function renderSemesters() {
  $("#semesterGrid").innerHTML = Array.from({ length: 8 }, (_, index) => {
    const semester = index + 1;
    const subjectCount = getSubjects(selectedDepartment, semester).length;

    return `
      <button class="semester-card ${semester === selectedSemester ? "selected" : ""}"
        data-semester="${semester}">
        <span class="semester-number">${String(semester).padStart(2, "0")}</span>
        <span>
          <strong>Semester ${semester}</strong>
          <small>→ View ${subjectCount} subjects</small>
        </span>
      </button>
    `;
  }).join("");
}

function openSemester(semester, updateHistory = true) {
  const parsedSemester = Number(semester);
  if (!Number.isInteger(parsedSemester) || parsedSemester < 1 || parsedSemester > 8 || !getDepartment(selectedDepartment)) return;
  selectedSemester = parsedSemester;
  renderSemesters();

  const subjects = getSubjects(selectedDepartment, selectedSemester);
  $("#semesterSubjectsBreadcrumb").textContent =
    `${selectedDepartment.toUpperCase()} · SEMESTER ${selectedSemester}`;
  $("#semesterSubjectsTitle").textContent = `Semester ${selectedSemester} → Subjects`;

  $("#subjectGrid").innerHTML = subjects.map((subject, index) => {
    const count = resources.filter(resource =>
      resource.department === selectedDepartment &&
      Number(resource.semester) === selectedSemester &&
      resource.subject === subject
    ).length;

    return `
      <button class="subject-card" data-subject="${escapeHTML(subject)}">
        <span class="subject-icon">${index % 2 === 0 ? "▤" : "✦"}</span>
        <span class="subject-info">
          <strong>${escapeHTML(subject)}</strong>
          <small>${count} resource${count === 1 ? "" : "s"} · View Resources →</small>
        </span>
        <span class="arrow">›</span>
      </button>
    `;
  }).join("");

  showPage("semesterSubjectsPage", `Semester ${selectedSemester} Subjects`, updateHistory);
}

window.addEventListener("popstate", event => {
  const route = event.state;
  if (!route?.paperPilotPage) {
    showPage("dashboard-view", "Dashboard", false);
    return;
  }

  selectedDepartment = route.department || "";
  selectedSemester = Number(route.semester) || 1;
  selectedSubject = route.subject || "";
  previousPage = route.previousPage || "departments-view";

  if (route.paperPilotPage === "departments-view") {
    if (selectedDepartment) openDepartment(selectedDepartment, false);
    else openBrowseDepartments(false);
    return;
  }

  if (route.paperPilotPage === "semesterSubjectsPage") {
    openSemester(selectedSemester, false);
    return;
  }

  if (!isLoggedIn && ["myFilesPage", "uploadPage"].includes(route.paperPilotPage)) {
    const loginReason = route.paperPilotPage === "uploadPage"
      ? "upload"
      : route.heading === "My Downloads" ? "downloads" : "uploads";
    openLogin(loginReason, false);
    return;
  }

  showPage(route.paperPilotPage, route.heading || "Dashboard", false);
});

function openSubject(subject) {
  selectedSubject = subject;
  currentFilter = "All";

  $("#resourceSubjectTitle").textContent = subject;
  $("#subjectBreadcrumb").textContent =
    `${selectedDepartment} · Semester ${selectedSemester}`;

  $("#resourceSubjectDescription").textContent =
    `Study resources for ${subject}. Browse notes, presentations, past papers and viva questions.`;

  $$("#resourceFilters .chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.filter === "All");
  });

  renderSubjectResources();
  showPage("subjectPage", subject);
}

/* =====================================================
   6. RESOURCE LISTS AND FILTERS
===================================================== */

function fileLabel(format = "") {
  return escapeHTML(String(format).toUpperCase() || "FILE");
}

function resourceCard(resource) {
  return `
    <article class="resource-card">
      <span class="resource-file-icon">${fileLabel(resource.format)}</span>
      <div class="resource-info">
        <h3>${escapeHTML(resource.title)}</h3>
        <p>${escapeHTML(resource.department)} · Semester ${resource.semester} ·
          ${escapeHTML(resource.subject)}</p>
        <p>${escapeHTML(resource.type)} · ${escapeHTML(resource.format)} ·
          Uploaded by ${escapeHTML(resource.uploader || "Student")}</p>
      </div>
      <div class="resource-actions">
        <span class="resource-type">${escapeHTML(resource.type)}</span>
        <button class="primary-btn" data-download="${escapeHTML(resource.id)}">
          Download
        </button>
      </div>
    </article>
  `;
}

function emptyState(title, message) {
  return `
    <div class="empty-state">
      <span>▤</span>
      <strong>${escapeHTML(title)}</strong>
      <div class="muted">${escapeHTML(message)}</div>
    </div>
  `;
}

function matchesType(resource, filter) {
  if (filter === "All") return true;
  if (filter === "PPT") {
    return resource.type === "PPT" || resource.type === "Slides";
  }
  return resource.type === filter;
}

function renderSubjectResources() {
  const matches = resources.filter(resource =>
    resource.department === selectedDepartment &&
    Number(resource.semester) === Number(selectedSemester) &&
    resource.subject === selectedSubject &&
    matchesType(resource, currentFilter)
  );

  $("#resourceList").innerHTML = matches.length
    ? matches.map(resourceCard).join("")
    : emptyState(
        "No resources uploaded yet",
        "Be the first to upload study material for this subject."
      );
}

function openLibrary() {
  renderLibrary();
  showPage("libraryPage", "Resource Library");
}

function renderLibrary() {
  const query = $("#librarySearch").value.trim().toLowerCase();
  const department = $("#libraryDepartment").value;
  const type = $("#libraryType").value;

  const matches = resources.filter(resource => {
    const searchable = [
      resource.title,
      resource.subject,
      resource.department,
      resource.description,
      resource.type
    ].join(" ").toLowerCase();

    return (!query || searchable.includes(query)) &&
      (!department || resource.department === department) &&
      (!type || resource.type === type);
  });

  $("#libraryList").innerHTML = matches.length
    ? matches.map(resourceCard).join("")
    : emptyState("No matching resources", "Try changing the search or filters.");
}

/* =====================================================
   7. SEARCH DEPARTMENT AND SUBJECT
===================================================== */

function searchCatalog(event) {
  if (event) event.preventDefault();

  const query = $("#searchInput").value.trim().toLowerCase();
  const chosenDepartment = $("#departmentSelect").value;
  const results = $("#searchResults");

  results.classList.remove("hidden");

  if (!query && !chosenDepartment) {
    results.innerHTML = `
      <p class="muted">Type a department or subject, or select a department from the dropdown.</p>
      <button class="result-row" id="browseAllResult">
        <span><strong>Browse all departments</strong>
          <small>Explore departments, semesters and subjects</small>
        </span>
        <span>→</span>
      </button>
    `;
    return;
  }

  const departmentMatches = departments.filter(department => {
    const text = `${department.name} ${department.description}`.toLowerCase();
    return (!chosenDepartment || department.name === chosenDepartment) &&
      (!query || text.includes(query));
  });

  const subjectMatches = [];

  departments.forEach(department => {
    if (chosenDepartment && department.name !== chosenDepartment) return;

    department.semesters.forEach((subjects, index) => {
      subjects.forEach(subject => {
        if (query && subject.toLowerCase().includes(query)) {
          subjectMatches.push({
            department: department.name,
            semester: index + 1,
            subject
          });
        }
      });
    });
  });

  let html = "";

  departmentMatches.forEach(department => {
    html += `
      <button class="result-row" data-open-department="${escapeHTML(department.name)}">
        <span>
          <strong>${escapeHTML(department.name)}</strong>
          <small>${department.degree} · View semesters and subjects</small>
        </span>
        <span>→</span>
      </button>
    `;
  });

  subjectMatches.slice(0, 30).forEach(item => {
    html += `
      <button class="result-row"
        data-search-subject="${escapeHTML(item.subject)}"
        data-search-department="${escapeHTML(item.department)}"
        data-search-semester="${item.semester}">
        <span>
          <strong>${escapeHTML(item.subject)}</strong>
          <small>${escapeHTML(item.department)} · Semester ${item.semester}</small>
        </span>
        <span>→</span>
      </button>
    `;
  });

  results.innerHTML = html || emptyState(
    "No results found",
    "Try a different spelling or select another department."
  );
}

function handleSearchResult(event) {
  const departmentButton = event.target.closest("[data-open-department]");

  if (departmentButton) {
    openDepartment(departmentButton.dataset.openDepartment);
    return;
  }

  const subjectButton = event.target.closest("[data-search-subject]");

  if (subjectButton) {
    selectedDepartment = subjectButton.dataset.searchDepartment;
    selectedSemester = Number(subjectButton.dataset.searchSemester);

    openDepartment(selectedDepartment);
    openSemester(selectedSemester);
    openSubject(subjectButton.dataset.searchSubject);
    return;
  }

  if (event.target.closest("#browseAllResult")) {
    openBrowseDepartments();
  }
}

/* =====================================================
   8. BULK UPLOAD FORM
===================================================== */

const customSubjectValue = "__custom_subject__";

function getUploadSubject() {
  return $("#uploadSubject").value === customSubjectValue
    ? $("#uploadSubjectCustom").value.trim()
    : $("#uploadSubject").value.trim();
}

function updateUploadSubjectOptions(preferredSubject = "") {
  const subjectSelect = $("#uploadSubject");
  const semesterSelect = $("#uploadSemester");
  const department = $("#uploadDepartment").value;
  semesterSelect.disabled = !department;
  if (!department) semesterSelect.value = "";
  const semester = semesterSelect.value;
  const semesterPlaceholder = semesterSelect.options[0];
  if (semesterPlaceholder) {
    semesterPlaceholder.textContent = department ? "Select semester" : "Select department first";
  }
  semesterSelect.syncStyledSelect?.();
  const departmentAliases = {
    CS: "Computer Systems Engineering",
    SE: "Software Engineering"
  };
  const subjectDepartment = departmentAliases[department] || department;
  const subjects = department && semester ? getSubjects(subjectDepartment, semester) : [];
  const ready = Boolean(department && semester);
  const options = !ready
    ? [new Option(department ? "Select semester first" : "Select department first", "")]
    : subjects.length
      ? [
        new Option("Select a subject", ""),
        ...subjects.map(subject => new Option(subject, subject)),
        new Option("Other (enter manually)", customSubjectValue)
      ]
      : [
        new Option("No subjects are listed for this selection", ""),
        new Option("Enter subject manually", customSubjectValue)
      ];

  subjectSelect.replaceChildren(...options);

  const matchingSubject = subjects.find(subject => subject === preferredSubject);
  const useCustomSubject = ready && Boolean(preferredSubject) && !matchingSubject;
  subjectSelect.disabled = !ready;
  subjectSelect.value = matchingSubject || (useCustomSubject ? customSubjectValue : "");
  $("#uploadSubjectCustom").value = useCustomSubject ? preferredSubject : "";
  $("#uploadSubjectCustom").classList.toggle("hidden", subjectSelect.value !== customSubjectValue);
  $("#uploadSubjectCustom").required = subjectSelect.value === customSubjectValue;
  const subjectHint = $("#uploadSubjectHint");
  if (subjectHint) {
    subjectHint.textContent = ready
      ? subjects.length
        ? "Subjects shown are for the selected department and semester."
        : "No subject list is available here. Choose manual entry to continue."
      : department
        ? "Now choose a semester to see the available subjects."
        : "Choose a department first. Then select a semester.";
  }
  subjectSelect.syncStyledSelect?.();
}

function openUpload(prefill = {}) {
  if (!isLoggedIn) {
    openLogin("upload");
    return;
  }

  $("#uploadForm").reset();
  selectedFiles = [];
  restoredDraftFiles = [];
  uploaderNameTouched = false;
  $("#selectedFiles").replaceChildren();
  $("#fileInput").value = "";
  const draft = loadStored("paperpilot_upload_draft", null);
  const hasDraft = draft && typeof draft === "object";
  $("#uploaderName").value = prefill.uploaderName || draft?.uploaderName || localStorage.getItem("paperpilot_user") || "";
  $("#uploadDepartment").value = prefill.department || draft?.department || "";
  $("#uploadSemester").value = prefill.semester ? String(prefill.semester) : draft?.semester || "";
  $("#uploadCategory").value = prefill.category || draft?.category || "";
  updateUploadSubjectOptions(prefill.subject || draft?.subject || "");
  $("#sameInfoCheckbox").checked = typeof draft?.sameInfo === "boolean" ? draft.sameInfo : true;
  restoredDraftFiles = Array.isArray(draft?.files) ? draft.files : [];
  $("#draftNotice").classList.toggle("hidden", !hasDraft);
  $("#draftNotice").dataset.state = hasDraft ? "restored" : "";
  $("#draftNotice").textContent = hasDraft
    ? `Draft restored${draft.savedAt ? ` from ${draft.savedAt}` : ""}. ${restoredDraftFiles.length ? "Re-select the listed files to continue." : "Your saved details are ready to continue."} File contents are not stored in drafts.`
    : "";
  $("#uploadDepartment").syncStyledSelect?.();
  $("#uploadSemester").syncStyledSelect?.();
  $("#uploadCategory").syncStyledSelect?.();
  $("#uploadSubject").syncStyledSelect?.();
  renderSelectedFiles();
  $("#uploadProgress").classList.add("hidden");
  $("#uploadProgressBar").style.width = "0%";
  $("#uploaderName").classList.remove("is-invalid");
  $("#uploadSubjectCustom").classList.remove("is-invalid");
  $("#subjectError")?.remove();
  $("#uploaderNameError")?.remove();

  showPage("uploadPage", "Upload Resource");
}

function saveUploadDraft() {
  const uploaderName = $("#uploaderName").value.trim();
  const savedUserName = (localStorage.getItem("paperpilot_user") || "").trim();
  const hasDetails = Boolean(
    (uploaderName && (uploaderName !== savedUserName || uploaderNameTouched)) ||
    $("#uploadDepartment").value ||
    getUploadSubject() ||
    $("#uploadSemester").value ||
    $("#uploadCategory").value
  );
  if (!hasDetails && !selectedFiles.length && !restoredDraftFiles.length) {
    const message = "Add at least one detail or select a file before saving.";
    $("#draftNotice").dataset.state = "error";
    $("#draftNotice").textContent = message;
    $("#draftNotice").classList.remove("hidden");
    showToast(message, "error");
    $("#uploadDepartment").parentElement.querySelector(".select-trigger")?.focus();
    return;
  }

  const files = [
    ...selectedFiles.map(item => ({
      originalName: item.file.name,
      fileName: item.nameInput?.value.trim() || item.file.name,
      subject: item.row?.querySelector(".file-subject")?.value.trim() || "",
      semester: item.row?.querySelector(".file-semester")?.value || "",
      category: item.row?.querySelector(".file-category")?.value || ""
    })),
    ...restoredDraftFiles
  ];
  const draft = {
    uploaderName: $("#uploaderName").value.trim(),
    department: $("#uploadDepartment").value,
    subject: getUploadSubject(),
    semester: $("#uploadSemester").value,
    category: $("#uploadCategory").value,
    sameInfo: $("#sameInfoCheckbox").checked,
    files,
    savedAt: new Date().toLocaleString()
  };

  try {
    localStorage.setItem("paperpilot_upload_draft", JSON.stringify(draft));
  } catch (error) {
    showToast("Could not save this draft in your browser.", "error");
    return;
  }

  restoredDraftFiles = files;
  $("#draftNotice").dataset.state = "saved";
  $("#draftNotice").textContent = `Draft saved ${draft.savedAt}. File contents are not stored; re-select the files to continue.`;
  $("#draftNotice").classList.remove("hidden");
  showToast("Draft saved successfully.");
}

function submitUpload(event) {
  event.preventDefault();

  const subjectInput = $("#uploadSubject");
  const subject = getUploadSubject();
  $("#uploadSubjectCustom").classList.toggle("is-invalid", subjectInput.value === customSubjectValue && !subject);
  $("#subjectError")?.remove();
  if (!subject) {
    const error = document.createElement("span");
    error.id = "subjectError";
    error.className = "field-error";
    error.textContent = "Subject is required.";
    subjectInput.closest(".select-field").insertAdjacentElement("afterend", error);
    if (subjectInput.disabled) {
      showToast(
        subjectInput.options.length && subjectInput.options[0].textContent.startsWith("No subjects")
          ? "No subjects are listed for this department and semester."
          : "Select a department and semester to choose a subject.",
        "error"
      );
      if (!$("#uploadDepartment").value || !$("#uploadSemester").value) {
        const missingSelect = !$("#uploadDepartment").value ? $("#uploadDepartment") : $("#uploadSemester");
        missingSelect.parentElement.querySelector(".select-trigger")?.focus();
      }
      return;
    }
    const customSelected = subjectInput.value === customSubjectValue;
    showToast(customSelected ? "Please enter a subject." : "Please select a subject.", "error");
    if (customSelected) $("#uploadSubjectCustom").focus();
    else subjectInput.parentElement.querySelector(".select-trigger")?.focus();
    return;
  }

  const uploaderName = $("#uploaderName").value.trim();
  const department = $("#uploadDepartment").value;
  $("#uploaderName").classList.toggle("is-invalid", !uploaderName);
  $("#uploaderNameError")?.remove();
  if (!uploaderName) {
    const error = document.createElement("span");
    error.id = "uploaderNameError";
    error.className = "field-error";
    error.textContent = "Your full name is required.";
    $("#uploaderName").insertAdjacentElement("afterend", error);
    showToast("Please enter your full name.", "error");
    $("#uploaderName").focus();
    return;
  }
  if (!department) {
    showToast("Please select a department.", "error");
    $("#uploadDepartment").parentElement.querySelector(".select-trigger")?.focus();
    return;
  }

  if (!selectedFiles.length) {
    showToast("Please select at least one file.", "error");
    return;
  }

  const semester = $("#uploadSemester").value;
  if (!semester) {
    showToast("Please select a semester.", "error");
    $("#uploadSemester").parentElement.querySelector(".select-trigger")?.focus();
    return;
  }

  const now = Date.now();
  const sameInfo = $("#sameInfoCheckbox").checked;
  const uploads = readUploadList("paperpilot_uploads");
  const addedUploads = selectedFiles.map((item, index) => {
    const fileName = item.nameInput.value.trim() || item.file.name;
    const itemSubject = sameInfo ? subject : item.row.querySelector(".file-subject")?.value.trim() || subject;
    const itemSemester = sameInfo ? semester : item.row.querySelector(".file-semester")?.value || semester;
    const itemCategory = sameInfo ? $("#uploadCategory").value : item.row.querySelector(".file-category")?.value || $("#uploadCategory").value;
    const fileType = item.file.name.split(".").pop().toLowerCase();
    const upload = {
      id: now + index,
      fileName,
      uploaderName,
      department,
      subject: itemSubject,
      semester: Number(itemSemester),
      category: itemCategory,
      date: new Date().toLocaleDateString(),
      fileType
    };
    uploadFileObjects.set(upload.id, item.file);
    return upload;
  });

  const progress = $("#uploadProgress");
  const progressBar = $("#uploadProgressBar");
  progress.classList.remove("hidden");
  progress.setAttribute("aria-valuenow", "0");
  progressBar.style.width = "0%";
  let percentage = 0;
  const timer = setInterval(() => {
    percentage = Math.min(100, percentage + 20);
    progressBar.style.width = `${percentage}%`;
    progress.setAttribute("aria-valuenow", String(percentage));
    if (percentage === 100) {
      clearInterval(timer);
      try {
        localStorage.setItem("paperpilot_uploads", JSON.stringify([...uploads, ...addedUploads]));
      } catch (error) {
        showToast("Could not save uploads in this browser. Check available storage.", "error");
        return;
      }
      let draftClearFailed = false;
      try {
        localStorage.removeItem("paperpilot_upload_draft");
      } catch (error) {
        draftClearFailed = true;
      }
      restoredDraftFiles = [];
      showToast(
        draftClearFailed
          ? "Upload saved, but its draft could not be cleared."
          : `${addedUploads.length} file${addedUploads.length === 1 ? "" : "s"} uploaded successfully.`,
        draftClearFailed ? "error" : "notice",
        draftClearFailed ? 3000 : 2000
      );
      renderMyUploads();
      goHome();
      $("#myUploads").scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

/* =====================================================
   9. DOWNLOAD SCREEN
===================================================== */

function openDownload(resourceId) {
  currentResource = resources.find(resource => resource.id === resourceId);
  if (!currentResource) return;

  $("#downloadTitle").textContent = currentResource.title;
  $("#downloadDetails").textContent =
    `${currentResource.department} · Semester ${currentResource.semester} · ${currentResource.subject}`;

  $("#downloadFileName").textContent =
    currentResource.filename || "Resource file";

  $("#downloadOriginalFormat").textContent =
    `Original format: ${currentResource.format}`;

  $("#downloadFormat").innerHTML =
    `<option value="original">Original file (${escapeHTML(currentResource.format)})</option>`;

  previousPage = $("#subjectPage").classList.contains("active")
    ? "subjectPage"
    : "libraryPage";

  showPage("downloadPage", "Download Resource");
}

function triggerResourceDownload(url, filename, revokeUrl = false) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  if (revokeUrl) setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function downloadCurrentResource() {
  if (!currentResource) return;

  if (currentResource.objectUrl) {
    triggerResourceDownload(
      currentResource.objectUrl,
      currentResource.filename || "resource"
    );
    return;
  }

  // The built-in demo entries contain metadata, not real study documents.
  const demoContent = "PaperPilot demo download.";

  const blob = new Blob([demoContent], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  triggerResourceDownload(url, "PaperPilot-demo-resource.txt", true);
}

function readUploadList(key) {
  const value = loadStored(key, []);
  return Array.isArray(value) ? value : [];
}

function renderWelcome() {
  const name = localStorage.getItem("paperpilot_user");
  $("#userWelcome").innerHTML = name
    ? `Welcome, ${escapeHTML(name)} 👋 <button class="text-btn welcome-name-btn" type="button" data-set-name>Change Name</button>`
    : 'Welcome, Guest! <button class="text-btn welcome-name-btn" type="button" data-set-name>Set Name</button>';
}

function renderQuickAccessCounts() {
  $("#myUploadsCount").textContent = String(readUploadList("paperpilot_uploads").length);
  $("#myDownloadsCount").textContent = String(readUploadList("paperpilot_downloads").length);
}

function openMyFiles(tab = "uploads") {
  if (!isLoggedIn) {
    openLogin(tab === "downloads" ? "downloads" : "uploads");
    return;
  }

  activeUploadsTab = tab;
  renderMyUploads();
  showPage("myFilesPage", tab === "uploads" ? "My Uploads" : "My Downloads");
}

function fileIconType(fileType = "") {
  const extension = fileType.toLowerCase().replace(".", "");
  if (extension === "pdf") return ["PDF", "file-icon-pdf"];
  if (extension === "docx") return ["DOCX", "file-icon-docx"];
  if (extension === "png" || extension === "jpg" || extension === "jpeg") return [extension.toUpperCase(), "file-icon-image"];
  return [extension.toUpperCase() || "FILE", "file-icon-other"];
}

function updateUploadFilters(uploads) {
  const subjectFilter = $("#uploadsSubjectFilter");
  const currentSubject = subjectFilter.value;
  const subjects = [...new Set(uploads.map(upload => upload.subject).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  subjectFilter.innerHTML = '<option value="">All subjects</option>' +
    subjects.map(subject => `<option value="${escapeHTML(subject)}">${escapeHTML(subject)}</option>`).join("");
  subjectFilter.value = subjects.includes(currentSubject) ? currentSubject : "";
  subjectFilter.syncStyledSelect?.();
}

function renderUploadCard(upload, isDownload = false) {
  const sourceUpload = isDownload
    ? readUploadList("paperpilot_uploads").find(item => String(item.id) === String(upload.id))
    : upload;
  const [label, iconClass] = fileIconType(upload.fileType || sourceUpload?.fileType || upload.fileName?.split(".").pop());
  const actions = isDownload
    ? `<button class="text-btn" type="button" data-upload-action="download-again" data-id="${escapeHTML(upload.id)}">Download Again</button>
       <button class="text-btn" type="button" data-upload-action="remove-history" data-id="${escapeHTML(upload.id)}">Remove from History</button>`
    : `<button class="text-btn" type="button" data-upload-action="rename" data-id="${escapeHTML(upload.id)}" aria-label="Rename ${escapeHTML(upload.fileName)}">✎ Rename</button>
       <button class="text-btn" type="button" data-upload-action="delete" data-id="${escapeHTML(upload.id)}" aria-label="Delete ${escapeHTML(upload.fileName)}">Delete</button>
       <button class="primary-btn" type="button" data-upload-action="download" data-id="${escapeHTML(upload.id)}">↓ Download</button>`;
  return `
    <article class="upload-item-card" data-upload-card="${escapeHTML(upload.id)}">
      <div class="upload-item-main">
        <span class="file-type-icon ${iconClass}" aria-hidden="true">${label}</span>
        <div class="upload-item-info">
          <h3 title="${escapeHTML(upload.fileName)}" class="upload-file-name">${escapeHTML(upload.fileName)}</h3>
          <div class="upload-badges">
            <span class="upload-badge">${escapeHTML(upload.subject || "Uncategorized")}</span>
            ${(upload.semester || sourceUpload?.semester) ? `<span class="upload-badge">Semester ${escapeHTML(upload.semester || sourceUpload.semester)}</span>` : ""}
            ${(upload.department || sourceUpload?.department) ? `<span class="upload-badge">${escapeHTML(upload.department || sourceUpload.department)}</span>` : ""}
          </div>
          <small class="upload-date">${isDownload ? `Downloaded ${escapeHTML(upload.downloadedAt || "")}` : escapeHTML(upload.date || "")}</small>
          ${!isDownload && upload.uploaderName ? `<small class="upload-date">Uploaded by ${escapeHTML(upload.uploaderName)}</small>` : ""}
        </div>
      </div>
      <div class="upload-item-actions">${actions}</div>
    </article>`;
}

function renderMyUploads() {
  renderWelcome();
  const uploads = readUploadList("paperpilot_uploads");
  const downloads = activeUploadsTab === "downloads";
  renderQuickAccessCounts();
  $("#uploadsControls").classList.toggle("hidden", downloads);
  $("#clearDownloadsBtn").classList.toggle("hidden", !downloads || downloads.length === 0);
  $("#uploadsTab").classList.toggle("active", !downloads);
  $("#downloadsTab").classList.toggle("active", downloads);
  $("#uploadsTab").setAttribute("aria-selected", String(!downloads));
  $("#downloadsTab").setAttribute("aria-selected", String(downloads));

  const grid = $("#uploadsGrid");
  if (downloads) {
    const history = readUploadList("paperpilot_downloads");
    grid.innerHTML = history.length
      ? history.map(item => renderUploadCard(item, true)).join("")
      : '<div class="empty-state uploads-empty"><span aria-hidden="true">↓</span><strong>No downloads yet.</strong></div>';
    return;
  }

  updateUploadFilters(uploads);
  const query = $("#uploadsSearch").value.trim().toLowerCase();
  const subject = $("#uploadsSubjectFilter").value;
  const semester = $("#uploadsSemesterFilter").value;
  const filtered = uploads.filter(upload =>
    (!query || String(upload.fileName || "").toLowerCase().includes(query)) &&
    (!subject || upload.subject === subject) &&
    (!semester || String(upload.semester) === semester)
  );
  grid.innerHTML = filtered.length
    ? filtered.map(item => renderUploadCard(item)).join("")
    : uploads.length
      ? '<div class="empty-state uploads-empty"><span aria-hidden="true">⌕</span><strong>No results found</strong></div>'
      : '<div class="empty-state uploads-empty"><span aria-hidden="true">▤</span><strong>No resources yet. Be the first to upload!</strong></div>';
}

function renderSelectedFiles() {
  const container = $("#selectedFiles");
  selectedFiles.forEach(item => {
    if (item.nameInput) item.fileName = item.nameInput.value;
  });
  const sameInfo = $("#sameInfoCheckbox").checked;
  container.innerHTML = selectedFiles.map((item, index) => {
    const type = item.file.name.split(".").pop().toUpperCase();
    const draftInfo = item.draftInfo || {};
    const individualFields = sameInfo ? "" : `
      <div class="individual-file-fields">
        <label>Subject<input class="file-subject" value="${escapeHTML(draftInfo.subject || getUploadSubject())}" aria-label="Subject for ${escapeHTML(item.file.name)}"></label>
        <label>Semester<select class="file-semester" aria-label="Semester for ${escapeHTML(item.file.name)}">
          ${Array.from({ length: 8 }, (_, semesterIndex) => {
            const semester = String(semesterIndex + 1);
            return `<option value="${semester}" ${String(draftInfo.semester || $("#uploadSemester").value) === semester ? "selected" : ""}>Semester ${semester}</option>`;
          }).join("")}
        </select></label>
        <label>Category<select class="file-category" aria-label="Category for ${escapeHTML(item.file.name)}">
          ${["", "Notes", "Past Papers", "Slides", "Books", "Assignments", "Other"].map(category =>
            `<option value="${escapeHTML(category)}" ${String(draftInfo.category || $("#uploadCategory").value) === category ? "selected" : ""}>${escapeHTML(category || "Select category")}</option>`
          ).join("")}
        </select></label>
      </div>`;
    return `<div class="selected-file-row" data-file-index="${index}">
      <span class="file-type-icon ${fileIconType(type)[1]}" aria-hidden="true">${escapeHTML(type)}</span>
      <label class="file-name-field">File name<input class="selected-file-name" value="${escapeHTML(item.draftInfo?.fileName || item.fileName || item.file.name)}" aria-label="File name ${index + 1}"></label>
      <button class="text-btn remove-selected-file" type="button" data-remove-file="${index}" aria-label="Remove ${escapeHTML(item.file.name)}">Remove</button>
      ${individualFields}
    </div>`;
  }).join("");

  selectedFiles = selectedFiles.map((item, index) => ({
    ...item,
    row: container.querySelector(`[data-file-index="${index}"]`),
    nameInput: container.querySelector(`[data-file-index="${index}"] .selected-file-name`)
  }));
}

function addSelectedFiles(fileList) {
  const allowed = new Set(["pdf", "docx", "png", "jpg"]);
  const rejected = [];
  [...fileList].forEach(file => {
    const extension = file.name.split(".").pop().toLowerCase();
    if (!allowed.has(extension)) {
      rejected.push(file.name);
      return;
    }
    if (!selectedFiles.some(item => item.file.name === file.name && item.file.size === file.size)) {
      const draftIndex = restoredDraftFiles.findIndex(item => item.originalName === file.name);
      const draftInfo = draftIndex >= 0 ? restoredDraftFiles.splice(draftIndex, 1)[0] : null;
      selectedFiles.push({ file, nameInput: null, row: null, draftInfo });
    }
  });
  if (rejected.length) showToast(`Unsupported file type: ${rejected.join(", ")}`, "error");
  $("#draftNotice").classList.toggle("hidden", restoredDraftFiles.length === 0);
  if (restoredDraftFiles.length) {
    $("#draftNotice").textContent = `Re-select the remaining draft files to restore their names. File contents are not stored in drafts.`;
  }
  renderSelectedFiles();
}

function saveDownload(upload) {
  const history = readUploadList("paperpilot_downloads");
  const downloadedAt = new Date().toLocaleString();
  const existingIndex = history.findIndex(item => String(item.id) === String(upload.id));
  const record = {
    id: upload.id,
    fileName: upload.fileName,
    subject: upload.subject,
    downloadedAt
  };
  if (existingIndex >= 0) history[existingIndex] = record;
  else history.unshift(record);
  try {
    localStorage.setItem("paperpilot_downloads", JSON.stringify(history));
  } catch (error) {
    showToast("Could not save download history in this browser.", "error");
    return;
  }

  const file = uploadFileObjects.get(upload.id);
  if (file) {
    const url = URL.createObjectURL(file);
    triggerResourceDownload(url, upload.fileName, true);
  }
  renderQuickAccessCounts();
  if (activeUploadsTab === "downloads") renderMyUploads();
}

function updateUploadRecord(id, updater) {
  const uploads = readUploadList("paperpilot_uploads");
  const updated = uploads.map(upload => String(upload.id) === String(id) ? updater(upload) : upload);
  localStorage.setItem("paperpilot_uploads", JSON.stringify(updated));
  renderMyUploads();
}

function setUserName() {
  const name = prompt("What name should PaperPilot use?");
  if (name === null) return;
  const trimmedName = name.trim();
  if (!trimmedName) {
    showToast("Please enter a name.", "error");
    return;
  }
  localStorage.setItem("paperpilot_user", trimmedName);
  renderWelcome();
}

/* =====================================================
   10. EVENT LISTENERS
===================================================== */

$$("[data-home]").forEach(button => {
  button.addEventListener("click", goHome);
});

$("#loginNavButton").addEventListener("click", openLogin);
$("#loginBackButton").addEventListener("click", goHome);

$$("[data-back-home]").forEach(button => {
  button.addEventListener("click", goHome);
});

$("#allSubjectsBtn").addEventListener("click", () => {
  const departmentName = $("#departmentSelect").value;

  if (departmentName) {
    openDepartment(departmentName);
  } else {
    openBrowseDepartments();
  }
});

$("#resourcesNav").addEventListener("click", openLibrary);
$("#uploadNav").addEventListener("click", () => openUpload());
$$("[data-open-my-files]").forEach(card => {
  card.addEventListener("click", () => openMyFiles(card.dataset.openMyFiles));
});
$("#searchForm").addEventListener("submit", searchCatalog);
$("#searchResults").addEventListener("click", handleSearchResult);

$("#browseDepartmentGrid").addEventListener("click", event => {
  const card = event.target.closest("[data-department]");
  if (card) openDepartment(card.dataset.department);
});

$("#browseAllDepartments").addEventListener("click", openBrowseDepartments);

$("#semesterGrid").addEventListener("click", event => {
  const card = event.target.closest("[data-semester]");
  if (card) openSemester(card.dataset.semester);
});

$("#subjectGrid").addEventListener("click", event => {
  const card = event.target.closest("[data-subject]");
  if (card) openSubject(card.dataset.subject);
});

$("#backToSemesters").addEventListener("click", () => {
  if (history.state?.paperPilotPage === "semesterSubjectsPage" && history.length > 1) {
    history.back();
  } else {
    openDepartment(selectedDepartment);
  }
});

$("#backToSubjects").addEventListener("click", () => {
  if (history.state?.paperPilotPage === "subjectPage" && history.length > 1) {
    history.back();
  } else {
    openDepartment(selectedDepartment);
    openSemester(selectedSemester);
  }
});

$("#resourceFilters").addEventListener("click", event => {
  const chip = event.target.closest("[data-filter]");
  if (!chip) return;

  currentFilter = chip.dataset.filter;

  $$("#resourceFilters .chip").forEach(item => {
    item.classList.toggle("active", item === chip);
  });

  renderSubjectResources();
});

document.addEventListener("click", event => {
  const button = event.target.closest("[data-download]");
  if (button) openDownload(button.dataset.download);
});

$("#librarySearch").addEventListener("input", renderLibrary);
$("#libraryDepartment").addEventListener("change", renderLibrary);
$("#libraryType").addEventListener("change", renderLibrary);

const fileInput = $("#fileInput");
const fileDropZone = $("#fileDropZone");
fileInput.addEventListener("change", event => {
  addSelectedFiles(event.target.files);
  fileInput.value = "";
});
fileDropZone.addEventListener("click", event => {
  if (event.target !== fileInput) fileInput.click();
});
fileDropZone.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    fileInput.click();
  }
});
["dragenter", "dragover"].forEach(type => fileDropZone.addEventListener(type, event => {
  event.preventDefault();
  fileDropZone.classList.add("is-dragging");
}));
["dragleave", "drop"].forEach(type => fileDropZone.addEventListener(type, event => {
  event.preventDefault();
  fileDropZone.classList.remove("is-dragging");
}));
fileDropZone.addEventListener("drop", event => addSelectedFiles(event.dataTransfer.files));
$("#sameInfoCheckbox").addEventListener("change", renderSelectedFiles);
function clearUploadSubjectError() {
  $("#uploadSubjectCustom").classList.remove("is-invalid");
  $("#subjectError")?.remove();
}

$("#uploadDepartment").addEventListener("change", () => {
  $("#uploadSemester").value = "";
  updateUploadSubjectOptions();
  clearUploadSubjectError();
});
$("#uploadSemester").addEventListener("change", () => {
  updateUploadSubjectOptions();
  clearUploadSubjectError();
});
$("#uploadSubject").addEventListener("change", () => {
  const customSelected = $("#uploadSubject").value === customSubjectValue;
  $("#uploadSubjectCustom").classList.toggle("hidden", !customSelected);
  $("#uploadSubjectCustom").required = customSelected;
  if (customSelected) queueMicrotask(() => $("#uploadSubjectCustom").focus());
  clearUploadSubjectError();
});
$("#uploadSubjectCustom").addEventListener("input", clearUploadSubjectError);
$("#uploaderName").addEventListener("input", () => {
  uploaderNameTouched = true;
  $("#uploaderName").classList.remove("is-invalid");
  $("#uploaderNameError")?.remove();
});
$("#selectedFiles").addEventListener("input", event => {
  const row = event.target.closest(".selected-file-row");
  if (row && event.target.matches(".selected-file-name")) {
    const item = selectedFiles[Number(row.dataset.fileIndex)];
    if (item) item.fileName = event.target.value;
  }
});
$("#selectedFiles").addEventListener("click", event => {
  const removeButton = event.target.closest("[data-remove-file]");
  if (!removeButton) return;
  selectedFiles.splice(Number(removeButton.dataset.removeFile), 1);
  renderSelectedFiles();
});

$("#uploadForm").addEventListener("submit", submitUpload);
$("#uploadForm").addEventListener("input", () => {
  if ($("#draftNotice").dataset.state === "error") {
    $("#draftNotice").classList.add("hidden");
    $("#draftNotice").dataset.state = "";
  }
});
$("#uploadForm").addEventListener("change", () => {
  if ($("#draftNotice").dataset.state === "error") {
    $("#draftNotice").classList.add("hidden");
    $("#draftNotice").dataset.state = "";
  }
});

$("#cancelUpload").addEventListener("click", () => {
  $("#uploadForm").reset();
  selectedFiles = [];
  $("#selectedFiles").replaceChildren();
  goHome();
});

$("#uploadBackBtn").addEventListener("click", goHome);

$("#downloadBackBtn").addEventListener("click", () => {
  if (previousPage === "subjectPage") {
    showPage("subjectPage", selectedSubject);
    renderSubjectResources();
  } else {
    openLibrary();
  }
});

$("#downloadAction").addEventListener("click", downloadCurrentResource);

function closeMobileNav() {
  $("#primaryNav").classList.remove("is-open");
  $("#navOverlay").classList.remove("is-visible");
  $("#menuToggle").setAttribute("aria-expanded", "false");
  $("#menuToggle").setAttribute("aria-label", "Open navigation menu");
  document.body.classList.remove("nav-open");
}

$("#menuToggle").addEventListener("click", () => {
  const isOpen = $("#primaryNav").classList.toggle("is-open");
  $("#navOverlay").classList.toggle("is-visible", isOpen);
  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("#menuToggle").setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  document.body.classList.toggle("nav-open", isOpen);
});
$("#navOverlay").addEventListener("click", closeMobileNav);
$("#primaryNav").addEventListener("click", event => {
  if (event.target.closest("button")) closeMobileNav();
});

$("#uploadsTab").addEventListener("click", () => {
  activeUploadsTab = "uploads";
  renderMyUploads();
});
$("#downloadsTab").addEventListener("click", () => {
  activeUploadsTab = "downloads";
  renderMyUploads();
});
$("#uploadsSearch").addEventListener("input", renderMyUploads);
$("#uploadsSubjectFilter").addEventListener("change", renderMyUploads);
$("#uploadsSemesterFilter").addEventListener("change", renderMyUploads);
$("#clearDownloadsBtn").addEventListener("click", () => {
  localStorage.setItem("paperpilot_downloads", "[]");
  renderMyUploads();
  showToast("Download history cleared.");
});
$("#userWelcome").addEventListener("click", event => {
  if (event.target.closest("[data-set-name]")) setUserName();
});
$("#uploadsGrid").addEventListener("click", event => {
  const action = event.target.closest("[data-upload-action]");
  if (!action) return;
  const id = action.dataset.id;
  const upload = readUploadList("paperpilot_uploads").find(item => String(item.id) === String(id));
  switch (action.dataset.uploadAction) {
    case "rename": {
      const card = action.closest(".upload-item-card");
      const title = card.querySelector(".upload-file-name");
      const oldName = title.textContent;
      title.outerHTML = `<form class="inline-rename-form"><input class="inline-rename-input" value="${escapeHTML(oldName)}" aria-label="New file name"><button class="primary-btn" type="submit">Save</button><button class="text-btn" type="button" data-cancel-rename>Cancel</button></form>`;
      const input = card.querySelector(".inline-rename-input");
      input.focus();
      input.select();
      break;
    }
    case "delete":
      if (!upload) return;
      pendingDeleteId = id;
      $("#deleteModalMessage").textContent = `Are you sure you want to delete ${upload.fileName}? Cannot be undone.`;
      $("#deleteModal").classList.remove("hidden");
      $("#confirmDeleteBtn").focus();
      break;
    case "download":
      if (upload) saveDownload(upload);
      break;
    case "download-again": {
      const record = readUploadList("paperpilot_downloads").find(item => String(item.id) === String(id));
      if (record) saveDownload(record);
      break;
    }
    case "remove-history":
      localStorage.setItem("paperpilot_downloads", JSON.stringify(readUploadList("paperpilot_downloads").filter(item => String(item.id) !== String(id))));
      renderMyUploads();
      showToast("Download removed from history.");
      break;
    default:
      break;
  }
});
$("#uploadsGrid").addEventListener("submit", event => {
  if (!event.target.matches(".inline-rename-form")) return;
  event.preventDefault();
  const card = event.target.closest(".upload-item-card");
  const id = card.dataset.uploadCard;
  const fileName = event.target.querySelector("input").value.trim();
  if (!fileName) {
    showToast("File name cannot be empty.", "error");
    return;
  }
  try {
    updateUploadRecord(id, upload => ({ ...upload, fileName }));
    showToast("File renamed.");
  } catch (error) {
    showToast("Could not save the new file name.", "error");
  }
});
$("#uploadsGrid").addEventListener("click", event => {
  if (event.target.closest("[data-cancel-rename]")) renderMyUploads();
});
$("#cancelDeleteBtn").addEventListener("click", () => {
  pendingDeleteId = null;
  $("#deleteModal").classList.add("hidden");
});
$("#confirmDeleteBtn").addEventListener("click", () => {
  if (pendingDeleteId === null) return;
  try {
    localStorage.setItem("paperpilot_uploads", JSON.stringify(
      readUploadList("paperpilot_uploads").filter(item => String(item.id) !== String(pendingDeleteId))
    ));
    uploadFileObjects.delete(Number(pendingDeleteId));
    showToast("Upload deleted.");
  } catch (error) {
    showToast("Could not delete the upload from this browser.", "error");
  }
  pendingDeleteId = null;
  $("#deleteModal").classList.add("hidden");
  renderMyUploads();
});
$("#deleteModal").addEventListener("click", event => {
  if (event.target === $("#deleteModal")) $("#cancelDeleteBtn").click();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMobileNav();
    if (!$("#deleteModal").classList.contains("hidden")) $("#cancelDeleteBtn").click();
  }
});

/* =====================================================
   11. INITIALIZE WEBSITE
===================================================== */

const savedTheme = localStorage.getItem("paperpilot_muet_theme") || "light";
applyTheme(savedTheme);
$("#themeToggle").addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

populateDepartmentDropdowns();
renderDepartmentCards();
initializeStyledSelects();
renderMyUploads();
updateAuthUI();
history.replaceState({
  paperPilotPage: "dashboard-view",
  heading: "Dashboard",
  department: "",
  semester: 1,
  subject: "",
  previousPage: "departments-view"
}, "");
