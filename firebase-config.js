import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFz1PDu-A5HDQr3gBDEC2lDKS0H9YzPDI",
  authDomain: "paper-pilot-79e71.firebaseapp.com",
  projectId: "paper-pilot-79e71",
  storageBucket: "paper-pilot-79e71.firebasestorage.app",
  messagingSenderId: "1020624762383",
  appId: "1:1020624762383:web:460fb62c8619d44868157a",
  measurementId: "G-1177BC40M5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
