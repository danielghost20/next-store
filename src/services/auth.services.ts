import { Credentials, userSingUpData } from "@/interfaces/auth.interface";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "@/app/firebase";
import { addDoc, collection } from "firebase/firestore";
import Cookies from 'js-cookie'


export async function userSingUp(
  { name, last_name, photoURL, phoneNumber, email, password }: userSingUpData
) {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      addDoc(collection(db, "user"), {
        name: name,
        last_name: last_name,
        photo_url: photoURL,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        cart: []
      });
      return credentials.user;
    }
  } catch (error) {
    return error;
  }
}


export async function userSignIn({ email, password }: Credentials) {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    return error;
  }
}


export async function userSignInWithGoogle () {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)

}


export async function userSingOut() {
  try {
    const response = await signOut(auth);
    return response;
  } catch (error) {
    return error;
  }
}
