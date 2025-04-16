import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB38UIVzqusrvprOagwI6oC19XN_NipoqM",
    authDomain: "prepwise-d0e0f.firebaseapp.com",
    projectId: "prepwise-d0e0f",
    storageBucket: "prepwise-d0e0f.firebasestorage.app",
    messagingSenderId: "1057009862767",
    appId: "1:1057009862767:web:1f3a7024cc5ea40cdc259a",
    measurementId: "G-MVZQRNQ0WQ"
};

/// const analytics = getAnalytics(app);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);