import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSeC3587M5M2psC5p9ty9L2-DLyFWn3Gc",
  authDomain: "akreactproject-67348.firebaseapp.com",
  projectId: "akreactproject-67348",
  storageBucket: "akreactproject-67348.appspot.com",
  messagingSenderId: "495536342218",
  appId: "1:495536342218:web:2b0132e38c893021152033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);