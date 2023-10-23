// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_APP_ID as string
};

// Initialize Firebase

 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
export const auth = getAuth(app);