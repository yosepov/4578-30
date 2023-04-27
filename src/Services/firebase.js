// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzm_I7mPNEs1mL2qKIRQ2GQcK39QWPtsI",
    authDomain: "clone-4d018.firebaseapp.com",
    projectId: "clone-4d018",
    storageBucket: "clone-4d018.appspot.com",
    messagingSenderId: "240517229310",
    appId: "1:240517229310:web:d5a1bb07fccd91797413af",
    measurementId: "G-N5RJHD4EXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);

