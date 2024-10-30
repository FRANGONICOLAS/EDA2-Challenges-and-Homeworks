// Import the functions you need from the SDKs you need
import { getauth } from 'firebase/auth'
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQjRlvXJIZcHTaax3mnKDznwpyxwci-1Y",
  authDomain: "mecgraf-56009.firebaseapp.com",
  projectId: "mecgraf-56009",
  storageBucket: "mecgraf-56009.firebasestorage.app",
  messagingSenderId: "338763798296",
  appId: "1:338763798296:web:958b886ad849d3efc4306d",
  measurementId: "G-Y346KKZFY7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize Firebase auth
const auth = getauth()
