// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCDMzlC1btBg2nFJZKZdwIIGS-hWIupyaE",
    authDomain: "clone-4c5a6.firebaseapp.com",
    projectId: "clone-4c5a6",
    storageBucket: "clone-4c5a6.appspot.com",
    messagingSenderId: "770890504457",
    appId: "1:770890504457:web:73d69d4ce819cf90e15bd8",
    measurementId: "G-VL02N9447R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
