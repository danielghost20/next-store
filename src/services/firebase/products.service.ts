import { Category, Product } from "@/interfaces/product.interface";
import { db } from "@/config/firebase/firebase.config";
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



export async function getProducts(): Promise<Product[]> {
  try {
    const products: DocumentData[] = [];
    const q = query(collection(db, "products"), limit(10));
    const querySnapShots = await getDocs(q);
    querySnapShots.forEach((doc) => {
      products.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return products as Product[]
  } catch (error) {
    throw new Error("error del servidor");
  }
}


export async function getProductById(
  id: string
): Promise<Product | undefined> {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Product
  } catch (error) {
    throw new Error("Error del servidor");
  }
}


export async function getSimilarProducts(
  category: Category
): Promise<Product[]> {
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
    return products as Product[]
  } catch (error) {
    throw new Error("Error del servidor");
  }
}

export async function getProductsWithLimit(max: number): Promise<Product[]> {
  try {
    const products: DocumentData[] = []
    const q = query(collection(db, 'products'), limit(max))
    const querySnapShots = await getDocs(q)
    querySnapShots.forEach((doc) => {
      products.push({
        ...doc.data(),
        id: doc.id
      })
    })
    return products as  Product[]
  } catch (error) {
    throw new Error('error del servidor')
  }
}