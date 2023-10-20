import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebase'

import NextAuth from "next-auth"

const handler = NextAuth({
    pages: {
        signIn: '/auth/login',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials):Promise<any> {
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                .then(userCredentials => {
                    if (userCredentials) {
                        return {
                            name: userCredentials.user.displayName,
                            email: userCredentials.user.email,
                            image: userCredentials.user.photoURL
                        }
                    }
                    return null
                })
                .catch(err => console.log(err))
            }
        })
    ],
    callbacks: {
        session({session}) {
            return session
        }
    }
})

export { handler as GET, handler as POST }