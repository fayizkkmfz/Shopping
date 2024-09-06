// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA48zO6SF13UoGkOaabquIkFov2zmBp_10",
  authDomain: "e-commerce-74160.firebaseapp.com",
  projectId: "e-commerce-74160",
  storageBucket: "e-commerce-74160.appspot.com",
  messagingSenderId: "268483354272",
  appId: "1:268483354272:web:99c690bedf277361f333c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore(app)
export default app;