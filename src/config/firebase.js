// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXIR7CQECy3oTJlkUQQid8cnQJzgfmOY4",
  authDomain: "swp391-e06bc.firebaseapp.com",
  projectId: "swp391-e06bc",
  storageBucket: "swp391-e06bc.appspot.com",
  messagingSenderId: "585419284473",
  appId: "1:585419284473:web:cb64a78f59c6a9d85be728",
  measurementId: "G-LETHMHB6EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export {provider,storage};