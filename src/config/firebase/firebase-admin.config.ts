import {initFirestore} from '@auth/firebase-adapter'
import admin from 'firebase-admin'
import { env } from '../env';

let app;

if (!admin.apps.length) {
    app = admin.initializeApp({
        credential: admin.credential.cert({
            projectId: env.firebase.admin.FIREBASE_PROYECT_ID,
            clientEmail: env.firebase.admin.FIREBASE_CLIENT_EMAIL,
            privateKey: env.firebase.admin.FIREBASE_PRIVATE_KEY
        })
    })
}


const admindOb = initFirestore({
    credential: admin.credential.cert({
        projectId: env.firebase.admin.FIREBASE_PROYECT_ID,
        clientEmail: env.firebase.admin.FIREBASE_CLIENT_EMAIL,
        privateKey: env.firebase.admin.FIREBASE_PRIVATE_KEY
    })
})

const adminAuth = admin.auth(app)

export {admindOb, adminAuth}