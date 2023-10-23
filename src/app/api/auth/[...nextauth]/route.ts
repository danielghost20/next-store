import GoogleProvider from 'next-auth/providers/google' // Es un provedor que permite hacer un inicio de sesión mediante next-auth
import CredentialsProvider from 'next-auth/providers/credentials'  // Es un provedor que permite hacer un inicio de sesión mediante next-auth
import { signInWithEmailAndPassword } from 'firebase/auth' // Es una funcion que recibe contraseña y email, esta funcion es para autenticazion con firebase
import { auth } from '@/app/firebase' // Es una propiedad que se utiliza para hacer un login, registro, verificacion de ususario etc
import NextAuth from "next-auth" // Es una funcion que almacena diferentes providers (medidas de iniciar sesíon) entre otras herramientas
import { FirestoreAdapter } from '@auth/firebase-adapter'
import { admindOb } from '@/app/firebase-admin'


const handler = NextAuth({
    // Se marca la pagina a donde se hara el login
    pages: {
        signIn: '/auth/login',
    },
    // Almacena los providers con los que el usuario se hara login
    providers: [

        // Configuramos este provider pasando dos variables de entorno, (en este caso generadas por firebase authorization con google)
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        // Configuramos este provider pasando un nombre, y agregando credentials, la cual es un objeto que almacena tanto el correo como la contraseña
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            /**
             * 
             * @param credentials // Recive las credenciales como el correo y la contraseña
             * @returns {name: string, email: string, image: string} // Returna un objeto con los datos del usuario como name, email, y image (foto de perfil)
             */ 

            async authorize(credentials):Promise<any> {
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
        session: async ({session, token}) => {
            if (session.user) {
                if (token.sub) {
                    session.user.id = token.sub
                }
            }

            return session
        },
        jwt: async ({user, token}) => {
            if (user) {
                token.sub = user.id
            }
            return token
        }
    },

    adapter: FirestoreAdapter(admindOb)
})

export { handler as GET, handler as POST }