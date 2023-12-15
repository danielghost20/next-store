export const env = {
    firebase: {
        admin: {
            FIREBASE_PROYECT_ID: process.env.FIREBASE_PROJECT_ID as string,
            FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL as string,
            FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n')
        },
        general: {
            FIREBASE_API_KEY: process.env.NEXT_PUBLIC_API_KEY as string,
            FIREBASE_AUTH_DOMAIM: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
            FIREBASE_PROYECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
            FIREBASE_STOREAGE_BUCKET: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
            FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
            FIREBASE_API_ID: process.env.NEXT_PUBLIC_APP_ID as string
        }
    },
    stripe: {
        STRIPE_PRIVATE_KEY : process.env.STRIPE_PRIVATE_API_KEY as string
    },
    google: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string
    }
}