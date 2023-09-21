import { auth } from "@/app/firebase";

export async function userGetProfile() {
    if (auth.currentUser) {
        const user = auth.currentUser
        return {
            displayName: user.displayName ,
            email: user.email ,
            photoURL: user.photoURL ,
            emailVerified: user.emailVerified
        }
    }
}