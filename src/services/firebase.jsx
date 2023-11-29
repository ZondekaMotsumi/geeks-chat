// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsXrz66KgjPWeWKQ-Ugye9KRpEL_s08tc",
  authDomain: "geeks-chat-app.firebaseapp.com",
  projectId: "geeks-chat-app",
  storageBucket: "geeks-chat-app.appspot.com",
  messagingSenderId: "293537564612",
  appId: "1:293537564612:web:0cafacc2864842f5da4691",
  measurementId: "G-1154GBZRE3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);