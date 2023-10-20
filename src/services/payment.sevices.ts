import { auth, db } from "@/app/firebase";
import { Cart } from "@/interfaces/cart.interface";
import { CreditCard, UserContact } from "@/interfaces/payment.interface";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";

export async function postItemCart(cart: Cart[], total: number, email: string) {
  try {
    if (auth.currentUser) {
      const user = auth.currentUser.uid;
      const documentRef = doc(db, "user", user);
      
      const response = await updateDoc(documentRef, 'facture', {
        totalPrice: total,
        products: cart.map((product) => arrayUnion(product)),
        email: email
      });

      return response;
    }
  } catch (error) {
    return error;
  }
}

export async function postCreditCard(card: CreditCard) {
  try {
    if (auth.currentUser) {
      const user = auth.currentUser.uid;
      const documentRef = doc(db, "user", user);
      const response = await updateDoc(documentRef, {
        creditCard: card ,
      });
      return response;
    }
  } catch (error) {
    return error;
  }
}

export async function postUserContactAddress(userAddress: UserContact) {
  try {
    if (auth.currentUser) {
      const user = auth.currentUser.uid;
      const documentRef = doc(db, "user", user);
      const response = await updateDoc(documentRef, {
        userContact: userAddress
      })
      return response
    }
  } catch (error) {
    return error
  }
}