import { auth, db } from "@/app/firebase";
import { Cart } from "@/interfaces/cart.interface";
import { CreditCard, UserContact } from "@/interfaces/payment.interface";
import { doc, setDoc } from "firebase/firestore";

export async function postPurchase(
  cart: Cart[],
  total: number,
  address: UserContact,
  creditCcard: CreditCard,
  userId: string
) {
  try {
    if (userId && userId != "") {
      const documentRef = doc(db, "user", userId);
      const date = new Date();
      const data = {
        credit_card: {
          number_credit_card: creditCcard.number_credit_card,
          CVV: creditCcard.CVV,
          expiration_date: creditCcard.expiration_date,
        },
        user_address: {
          email: address.email,
          last_name: address.last_name,
          name: address.name,
          reference_address: address.reference_address,
          city: address.city,
          country: address.country,
          postal_code: address.postal_code,
        },
        purchases: [
          {
            date: date,
            products: [cart.map((item) => item)],
            total: total,
          },
        ],
      };
      const response = await setDoc(documentRef, data, { merge: true });

      return response;
    } else {
      return "no hay usuario autenticado";
    }
  } catch (error) {
    return error;
  }
}
