// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCrgMEu33nskCtFKvN9-76DYsHJkeB-LaM",
  authDomain: "insta-web-app-aeae4.firebaseapp.com",
  projectId: "insta-web-app-aeae4",
  storageBucket: "insta-web-app-aeae4.appspot.com",
  messagingSenderId: "112771560798",
  appId: "1:112771560798:web:1dfbbefc3118333e9f0bcf",
  measurementId: "G-YSG2LLLSGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);