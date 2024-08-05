// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0EUkdfpjRaJVX5XDGkeJNZYrsY_C9jfA",
  authDomain: "smartpantry-8723d.firebaseapp.com",
  projectId: "smartpantry-8723d",
  storageBucket: "smartpantry-8723d.appspot.com",
  messagingSenderId: "1071384497950",
  appId: "1:1071384497950:web:108fd41d74e2462293830f",
  measurementId: "G-YP63904DKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };