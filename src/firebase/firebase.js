import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAVoKDwEZ9iTBng52t_aucwe9WG9rE9bA0",
  authDomain: "crwn-db-19840.firebaseapp.com",
  projectId: "crwn-db-19840",
  storageBucket: "crwn-db-19840.appspot.com",
  messagingSenderId: "189563946298",
  appId: "1:189563946298:web:ac95b0e5d7bf6ae1377c03",
  measurementId: "G-J3FEQT7HXW",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
