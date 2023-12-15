import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebase/firebase.config'
import NextAuth from "next-auth"
import { FirestoreAdapter } from '@auth/firebase-adapter'
import { admindOb } from '@/config/firebase/firebase-admin.config'
import { env } from '@/config/env'

const handler = NextAuth({
    pages: {
        signIn: '/auth/login',
    },
    providers: [

        GoogleProvider({
            clientId: env.google.GOOGLE_CLIENT_ID,
            clientSecret: env.google.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },


            async authorize(credentials): Promise<any> {
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                    .then(userCredentials => {
                        if (userCredentials) {
                            return {
                                name: userCredentials.user.displayName,
                                email: userCredentials.user.email,
                                image: userCredentials.user.photoURL,
                                id: userCredentials.user.uid
                            }
                        }
                        return null
                    })
                    .catch(err => console.log(err))
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },

    callbacks: {
        session: async ({ session, token }) => {
            if (session.user) {
                if (token.sub) {
                    session.user.id = token.sub
                }
            }

            return session
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.sub = user.id
            }
            return token
        }
    },

    adapter: FirestoreAdapter(admindOb)
})

export { handler as GET, handler as POST }