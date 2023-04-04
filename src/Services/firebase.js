// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4meXcaDRi-h3GhxE1y4aoCGDQPJkI3kk",
  authDomain: "clone-78b57.firebaseapp.com",
  projectId: "clone-78b57",
  storageBucket: "clone-78b57.appspot.com",
  messagingSenderId: "731145290883",
  appId: "1:731145290883:web:cf38437d14a9d7c11a87b6",
  measurementId: "G-SRS4ER928Y"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
