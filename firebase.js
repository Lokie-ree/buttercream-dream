// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
  measurementId: "G-WL4FG04FS9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase authorization
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
