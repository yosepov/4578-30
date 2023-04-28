// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth,signInWithPopup } from 'firebase/auth';
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
export const database = getFirestore(app);
export const storage = getStorage(app);

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
