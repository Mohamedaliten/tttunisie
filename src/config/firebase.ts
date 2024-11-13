// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq85tqxs7mSDpy-nePfMZA2-tyP8tPl94",
  authDomain: "tttunisie-c3bb8.firebaseapp.com",
  projectId: "tttunisie-c3bb8",
  storageBucket: "tttunisie-c3bb8.firebasestorage.app",
  messagingSenderId: "513609340519",
  appId: "1:513609340519:web:e189221e3fe62b4cd466c2",
  measurementId: "G-0TY907DGC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);