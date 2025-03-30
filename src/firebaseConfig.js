import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Authentication import

const firebaseConfig = {
  apiKey: "AIzaSyByxxkTCjMPJd6ce6U9uvVyJAdEIrhf0AI",
  authDomain: "auth-system-136d9.firebaseapp.com",
  projectId: "auth-system-136d9",
  storageBucket: "auth-system-136d9.appspot.com",  // 🔴 Mistake fix: ".app" remove
  messagingSenderId: "817807879109",
  appId: "1:817807879109:web:6413429a9bed9dd73cb9ac",
  measurementId: "G-M5NZQ9P3PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Authentication setup

export { auth }; // Export authentication

