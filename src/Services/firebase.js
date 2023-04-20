// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

import "firebase/auth"
import "firebase/database"


const firebaseConfig = {
    apiKey : "AIzaSyAMsLUAAMbT6M68GUL1rg3KOlYGulGD-5E" , 
    authDomain : "fir-df5d0.firebaseapp.com" , 
    projectId : "fir-df5d0" , 
    storageBucket : "fir-df5d0.appspot.com" , 
    messagingSenderId : "275086539839" , 
    appId : "1:275086539839:web:4b1e1709bbac4750168c8a" , 
    measurementId : "G-2QCLEM3W3K" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
export const firestore = app.database;
export default app