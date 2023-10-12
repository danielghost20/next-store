import { auth } from "@/app/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export async function observeAuthState(): Promise<User | null> {
  return new Promise<User | null>((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}
