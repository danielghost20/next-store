import { Credentials, userSingUpData } from "@/interfaces/auth.interface";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "@/app/firebase";
import { addDoc, collection } from "firebase/firestore";

// Esta funcion es para subir usuarios, esta usando trycatch para retornar el resultado y pueda ser usado en la pagina de registro o inicio de secion
// Cuando se crea el usuario solo se envia el correo y la contraseña, por lo cual es necesario que despues de esto, se actualice el usuario agregando el numero de telefono y la imagen, (la foto puede ser opcional pero se le debe mandar ya sea una foto o cadena vacia)

export async function userSingUp(
  { email, password }: Credentials,
  { name, last_name, photoURL }: userSingUpData
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
      });
      return credentials.user;
    }
  } catch (error) {
    return error;
  }
}

// Esta funcion es para iniciar secion con una cuenta ya registrada, usa trycatch para retornar la respuesta y poder usarla en la pagina que se necesite

export async function userSingIn({ email, password }: Credentials) {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    return error;
  }
}

// Esta funcion es para borrar la secion del usuario

export async function userSingOut() {
  try {
    const response = await signOut(auth);
    return response;
  } catch (error) {
    return error;
  }
}
