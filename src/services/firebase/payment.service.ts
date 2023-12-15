import { db } from "@/config/firebase/firebase.config";
import { Product } from "@/interfaces/product.interface";
import { doc, collection, addDoc, updateDoc } from "firebase/firestore";

export async function postOrder(id: string, user_name: string, email: string, products: Product[], total: number) {
  try {
    const userDocRef = doc(db, 'user', id);
    const ordersCollectionRef = collection(userDocRef, 'orders');

    const date = new Date()
    const order = [
      {
        user_id: id,
        name: user_name,
        email: email,
        products: products.map(item => item),
        total: total,
        date: date,
        isPaid: false
      }
    ]

    const newOrderRef = await addDoc(ordersCollectionRef, order);
    return newOrderRef.id

  } catch (error: any) {
    console.log(error.message)
  }
}

export async function pathOrder(user_id: string, order_id: string, fields: any) {

  try {
    const userDocumentRef = doc(db, 'user', user_id)
    const ordersCollectionRef = collection(userDocumentRef, 'orders')
    const orderDocRef = doc(ordersCollectionRef, order_id)
    await updateDoc(orderDocRef, fields)
    return "documemnt updated"
  }
  catch (err: any) {
    console.log(err.message)
  }
}
