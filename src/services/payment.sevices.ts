import { auth, db } from "@/app/firebase";
import { Cart } from "@/interfaces/cart.interface";
import { updateDoc, arrayRemove, arrayUnion, doc } from "firebase/firestore";

export async function postItemCart(cart: Cart[]) {
  try {
    if (auth.currentUser) {
      const user = auth.currentUser.uid;
      const documentRef = doc(db, "user", user);
      const response = await updateDoc(documentRef, {
        cart: cart.map((product) => arrayUnion(product)),
      });
      return response;
    }
  } catch (error) {
    return error;
  }
}

export async function deleteItemCart(product: Cart) {
  try {
    if (auth.currentUser) {
      const user = auth.currentUser.uid;
      const documentRef = doc(db, "user", user);
      const response = await updateDoc(documentRef, {
        cart: arrayRemove(product),
      });
      return response;
    }
  } catch (error) {
    return error;
  }
}
