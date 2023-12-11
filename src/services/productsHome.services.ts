import { db } from "@/app/firebase";
import { collection, query, getDocs, DocumentData, limit } from "firebase/firestore";

export async function getProducts () :Promise <DocumentData[] | undefined> {
    try {
        const products: DocumentData[] = []
        const q = query(collection(db, 'products'), limit(4))
        const querySnapShots = await getDocs(q)
        querySnapShots.forEach((doc) => {
            products.push({
                ...doc.data(),
                id: doc.id
            })
        })
        return products
    } catch (error) {
        throw new Error('error del servidor')   
    }
}