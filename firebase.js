import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOAvT8N3UuOc0aNUoiIx-fEjwnK-KQRiQ",
  authDomain: "buttercream-ecom.firebaseapp.com",
  projectId: "buttercream-ecom",
  storageBucket: "buttercream-ecom.appspot.com",
  messagingSenderId: "66255345035",
  appId: "1:66255345035:web:1a8654bb56b563aece0b8e",
  measurementId: "G-WL4FG04FS9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
