import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA463Fa2cCwArF9UWAuXlX75-vCFZvhovA",
    authDomain: "link-hub-2094e.firebaseapp.com",
    projectId: "link-hub-2094e",
    storageBucket: "link-hub-2094e.firebasestorage.app",
    messagingSenderId: "143218461618",
    appId: "1:143218461618:web:d419c766c3a841801872ab"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)