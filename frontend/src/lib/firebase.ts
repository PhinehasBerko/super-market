// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe7-1tY0L-dEC0AFqzbfPjJ7G8l6plkVQ",
  authDomain: "super-market-demo.firebaseapp.com",
  projectId: "super-market-demo",
  storageBucket: "super-market-demo.firebasestorage.app",
  messagingSenderId: "264504196394",
  appId: "1:264504196394:web:0300a7c993d1ea88f4b253",
  measurementId: "G-N2DKY8FZ2V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();