import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/firebase";
import { userSignInWithGoogle } from "@/services/auth.services";
import { useSession } from "next-auth/react";

type UserAuthContextType = {
    user: User | null;
    feature: {
        signInGoogle: () => Promise<void>
    }
};



const userContext = createContext<UserAuthContextType>({
    user: null,
    feature: {
        signInGoogle: () => new Promise<void>((resolve, reject) => {
            // Aquí va tu código
            resolve();
        }),
    }
});

export const useUserContext = () => {
    return useContext(userContext);
};

export function UserProvider({ children }: { children: React.ReactNode }) {
    const {data} = useSession()
    const [user, setUser] = useState<any>(data?.user);



    useEffect(() => {
        const unsudscribre = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsudscribre();
    }, []);

    return (
        <userContext.Provider
            value={{ user, feature: {signInGoogle: userSignInWithGoogle}}}
        >
            {children}
        </userContext.Provider>
    );
}
