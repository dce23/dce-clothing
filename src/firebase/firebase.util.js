import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATA7_oQ7GdkpgY97WAfUxgLv9fysK1kKA",
  authDomain: "dce-clothing-db.firebaseapp.com",
  projectId: "dce-clothing-db",
  storageBucket: "dce-clothing-db.appspot.com",
  messagingSenderId: "721447745198",
  appId: "1:721447745198:web:7942fcc44c09431ac6df3f",
  measurementId: "G-G939WEM0JS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
