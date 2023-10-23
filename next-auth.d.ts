import NextAuth, {DefaultSession} from "next-auth/next";

declare module 'next-auth' {
    interface Session {
        firebaseStoken?: string
        user: {
            id: string
        } & DefaultSession['user']
    } 
}