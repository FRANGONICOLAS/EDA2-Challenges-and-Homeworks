// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjOYYpL26-f4TPmEFx_s5vyytR61-r1A",
  authDomain: "challenge-14.firebaseapp.com",
  projectId: "challenge-14",
  storageBucket: "challenge-14.firebasestorage.app",
  messagingSenderId: "339307209844",
  appId: "1:339307209844:web:8cd25510ffc9223ed1dd21",
  measurementId: "G-Q453V7ZDXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };