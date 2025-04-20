// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHfJXQdP_jbBwu_DY6oupJ7ArYBYseMnE",
  authDomain: "student-demo-registratio-146fc.firebaseapp.com",
  projectId: "student-demo-registratio-146fc",
  storageBucket: "student-demo-registratio-146fc.firebasestorage.app",
  messagingSenderId: "476406576463",
  appId: "1:476406576463:web:621cb99d31510ed0c3413a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ADD THIS LINE

export { db }; // Export Firestore DB instance