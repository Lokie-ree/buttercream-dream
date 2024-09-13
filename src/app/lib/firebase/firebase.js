// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOAvT8N3UuOc0aNUoiIx-fEjwnK-KQRiQ",
  authDomain: "buttercream-ecom.firebaseapp.com",
  projectId: "buttercream-ecom",
  storageBucket: "buttercream-ecom.appspot.com",
  messagingSenderId: "66255345035",
  appId: "1:66255345035:web:1a8654bb56b563aece0b8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase authorization
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
