// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADMWikz1qv8nV7VPLyKPjC0xpjiJg9MOk",
  authDomain: "genious-19f74.firebaseapp.com",
  projectId: "genious-19f74",
  storageBucket: "genious-19f74.appspot.com",
  messagingSenderId: "1055189411569",
  appId: "1:1055189411569:web:63330aa2054d0201482b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;