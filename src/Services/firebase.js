// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { signInWithPopup } from "firebase/auth";


const firebaseConfig = { apiKey: "AIzaSyCpshE3wH6rtUJUo5VvKiO2tFKs0ujBuZ4",
authDomain: "clone-1c706.firebaseapp.com",
projectId: "clone-1c706",
storageBucket: "clone-1c706.appspot.com",
messagingSenderId: "727034015114",
appId: "1:727034015114:web:3a2fe8bec813b50340ac73",
measurementId: "G-B6SPNS3LDG"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = ()=>{
     signInWithPopup(auth,provider).then((result)=>{
const name = result.user.displayName
const email = result.user.email
const profilePic = result.user.photoURL

localStorage.setItem('name',name)
localStorage.setItem('email',email)
localStorage.setItem('profilePic',profilePic)

     }).catch((error)=>{
        alert(error)
     })
}