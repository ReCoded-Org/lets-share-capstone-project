// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getDownloadURL, ref, uploadString, getStorage, uploadBytes } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhmMr1UAKnEeVF_uvVDfSDAfTa7Xtq3TU",
  authDomain: "let-s-share-59501.firebaseapp.com",
  projectId: "let-s-share-59501",
  storageBucket: "let-s-share-59501.appspot.com",
  messagingSenderId: "850382615813",
  appId: "1:850382615813:web:757e8ce4f17893141f736c"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app)

const storage = getStorage(app)

export {db , storage}

const provider = new GoogleAuthProvider()

