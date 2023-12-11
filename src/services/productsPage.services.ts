import { Category } from "@/interfaces/product.interface";
import { db } from "@/app/firebase";
import {
  collection,
  query,
  getDocs,
  DocumentData,
  limit,
  doc,
  getDoc,
  where,
} from "firebase/firestore";

export async function getProducts(): Promise<DocumentData[] | undefined> {
  try {
    const products: DocumentData[] = [];
    const q = query(collection(db, "firebase"), limit(10));
    const querySnapShots = await getDocs(q);
    querySnapShots.forEach((doc) => {
      products.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return products;
  } catch (error) {
    throw new Error("error del servidor");
  }
}

export async function getProductById(
  id: string
): Promise<DocumentData | undefined> {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    throw new Error("Error del servidor");
  }
}

export async function getSimilarProducts(
  category: Category
): Promise<DocumentData | undefined> {
  try {
    const products: DocumentData[] = [];
    const q = query(
      collection(db, "products"),
      where("category.name", "==", category.name),
      limit(4)
    );
    const querySnapShots = await getDocs(q);
    querySnapShots.forEach((doc) => {
      products.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return products;
  } catch (error) {
    throw new Error("Error del servidor");
  }
}
