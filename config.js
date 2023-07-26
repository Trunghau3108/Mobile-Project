import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getDatabase } from "firebase/database"

export const firebaseConfig = {
    apiKey: "AIzaSyCmZ16G60Hb8NkAEYevwwmnJJsbylkTrII",
    authDomain: "appotp2-64a1d.firebaseapp.com",
    projectId: "appotp2-64a1d",
    storageBucket: "appotp2-64a1d.appspot.com",
    messagingSenderId: "711754894363",
    appId: "1:711754894363:web:6c52e3faf21d7b50397cbe",
    measurementId: "G-0EJQFWKS6P"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = getDatabase(app);

export {auth, db, firebase};