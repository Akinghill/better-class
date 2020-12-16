import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDZSf4-dZJFC5GoYdj9faCMe98v5LsWnYw",
  authDomain: "better-class.firebaseapp.com",
  databaseURL: "https://better-class-default-rtdb.firebaseio.com",
  projectId: "better-class",
  storageBucket: "better-class.appspot.com",
  messagingSenderId: "507894999011",
  appId: "1:507894999011:web:96b43b118437fafa9022d6",
  measurementId: "G-6K1T3XYPPD"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;