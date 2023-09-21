// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCQhP_Hhd-L3ZJx2fEz8maYCClSI6FBosw",

  authDomain: "next-store-af81e.firebaseapp.com",

  projectId: "next-store-af81e",

  storageBucket: "next-store-af81e.appspot.com",

  messagingSenderId: "879645154550",

  appId: "1:879645154550:web:f4061a9f3747c939fc20d7",
};

// Initialize Firebase

 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
export const auth = getAuth(app);