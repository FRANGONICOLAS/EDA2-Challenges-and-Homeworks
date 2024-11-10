// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS8EfP-yAs6l2R_Nlxxb5aHqI1YlQmO18",
  authDomain: "challenge15-15983.firebaseapp.com",
  databaseURL: "https://challenge15-15983-default-rtdb.firebaseio.com",
  projectId: "challenge15-15983",
  storageBucket: "challenge15-15983.firebasestorage.app",
  messagingSenderId: "1042382516148",
  appId: "1:1042382516148:web:5b8aeb76fcbff5a0dd0ce1",
  measurementId: "G-LXLNZ242WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;