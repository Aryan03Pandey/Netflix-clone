// import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDXGxaQ46fhXbrPWetrgkBUyA6V0OB9id8",
    authDomain: "netflix-clone-f03e3.firebaseapp.com",
    projectId: "netflix-clone-f03e3",
    storageBucket: "netflix-clone-f03e3.appspot.com",
    messagingSenderId: "1095523387799",
    appId: "1:1095523387799:web:98e62406ee36b63d889cd2",
    measurementId: "G-WL88FBXVWY"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore();
  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  const auth = getAuth();

  export {auth}
  export default db;