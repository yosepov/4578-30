// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDIVlZXG7JZrDAZyBOWZnEZzwPHnMHKiqI",
    authDomain: "fir-b695f.firebaseapp.com",
    projectId: "fir-b695f",
    storageBucket: "fir-b695f.appspot.com",
    messagingSenderId: "371562973589",
    appId: "1:371562973589:web:c4512fabdbcd5ed1ab8e9c",
    measurementId: "G-PLTT6HYYQV"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
