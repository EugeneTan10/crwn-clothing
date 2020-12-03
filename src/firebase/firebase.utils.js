import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC29P5OdjdraPeUsC-R2yYeYvdVWYPj-wo",
    authDomain: "crwn-db-3ae03.firebaseapp.com",
    projectId: "crwn-db-3ae03",
    storageBucket: "crwn-db-3ae03.appspot.com",
    messagingSenderId: "179198823449",
    appId: "1:179198823449:web:56d0422c6b8168a2bbee88",
    measurementId: "G-41P5HLG9Q6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;