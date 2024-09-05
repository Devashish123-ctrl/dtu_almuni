// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps} from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVQJKIVxZymHU6LtrIZ_4R23uDo3m3UWc",
  authDomain: "dtu-blog.firebaseapp.com",
  projectId: "dtu-blog",
  storageBucket: "dtu-blog.appspot.com",
  messagingSenderId: "690400954781",
  appId: "1:690400954781:web:d10dab13826a4e1ba14774",
  measurementId: "G-W2V86MW6K7"
};


const app =initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export const initFirebase = () => {
  return app;
};
export{db ,storage}