import { createContext, useContext, useEffect, useState } from "react";
import cookies from "js-cookie";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/firebase";
import { userSingIn, userSingOut, userSingUp } from "@/services/auth.services";
import { Credentials } from "@/interfaces/auth.interface";
import { userSingUpData } from "@/interfaces/auth.interface";
import { useRouter } from "next/navigation";

type UserAuthContextType = {
    user: User | null;
    features: {
        singIn: (data: Credentials) => void;
        singOut: () => void;
        singUp: (data: UserFormSingUpType) => void;
    };
};

type UserFormSingUpType = {
    name: string;
    last_name: string;
    phoneNumber: number;
    email: string;
    password: string;
    photoURL: string;
};


const userContext = createContext<UserAuthContextType>({
    user: null,
    features: {
        singIn(data) { },
        singOut() { },
        singUp(data) { },
    },
});

export const useUserContext = () => {
    return useContext(userContext);
};

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<null | User>(null);
    const router = useRouter()

    const singIn = (data: Credentials) => {
        userSingIn(data)
            .then(res => { router.push('/'), console.log(res) })
        console.log('se ejhecuta la funcijin')
    };

    const singOut = () => {
        userSingOut();
    };

    const singUp = (data: userSingUpData) => {
        userSingUp(data);
    };

    useEffect(() => {
        const unsudscribre = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsudscribre();
    }, []);

    return (
        <userContext.Provider
            value={{ user, features: { singIn, singOut, singUp } }}
        >
            {children}
        </userContext.Provider>
    );
}
