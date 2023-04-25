// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC10xmUMVE-cENcUsmiO7hlLWnO3J_RqZI",
  authDomain: "clone-4b75c.firebaseapp.com",
  projectId: "clone-4b75c",
  storageBucket: "clone-4b75c.appspot.com",
  messagingSenderId: "806442191862",
  appId: "1:806442191862:web:c40fbd9756ddff6901d5d7",
  measurementId: "G-SPKR8YRG8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);