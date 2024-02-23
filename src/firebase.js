// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLTUbh16b_J3_ZTYyQLw2AJ5uQ4rtMyhE",
  authDomain: "react-app-62c72.firebaseapp.com",
  projectId: "react-app-62c72",
  storageBucket: "react-app-62c72.appspot.com",
  messagingSenderId: "609435729743",
  appId: "1:609435729743:web:04089f0cdce4d5b0bb8f3a",
  measurementId: "G-CRPSK5Y5DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)