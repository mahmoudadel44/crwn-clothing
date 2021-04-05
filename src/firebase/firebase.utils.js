import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDUqC5pWWhcPmMiAbk9Hm5ErU-jxkAbu8k",
  authDomain: "crwn-db-1e86e.firebaseapp.com",
  projectId: "crwn-db-1e86e",
  storageBucket: "crwn-db-1e86e.appspot.com",
  messagingSenderId: "493674240559",
  appId: "1:493674240559:web:17e7f47d0fb1e6a81bc4da",
  measurementId: "G-HG7LRX70QW",
};

if (firebase.apps.length) {
  firebase.app(); // if already initialized, use that one
} else {
  firebase.initializeApp(config);
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Using a popup for signInWithGoogle.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmpt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider2 = new firebase.auth.FacebookAuthProvider();
provider2.setCustomParameters({
  display: "select_account",
});
export const signInWithFacebook = () => auth.signInWithPopup(provider2);

export default firebase;
