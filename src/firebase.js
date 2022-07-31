// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrgMEu33nskCtFKvN9-76DYsHJkeB-LaM",
  authDomain: "insta-web-app-aeae4.firebaseapp.com",
  databaseURL: "https://insta-web-app-aeae4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "insta-web-app-aeae4",
  storageBucket: "insta-web-app-aeae4.appspot.com",
  messagingSenderId: "112771560798",
  appId: "1:112771560798:web:1dfbbefc3118333e9f0bcf",
  measurementId: "G-YSG2LLLSGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);