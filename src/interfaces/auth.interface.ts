import { User } from "firebase/auth";

export interface Credentials {
    email: string,
    password: string
}


export interface userSingUpData {
    name: string,
    last_name: string,
    photoURL: string,
    phoneNumber: number,
    email: string,
    password: string
}

export interface AuthStateChangedCallback {
    (user: User | null) : void
} 