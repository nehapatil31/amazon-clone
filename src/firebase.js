import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfdD1bYpRvfOR2Sn3Jnkws-_WmX0knbFo",
  authDomain: "clone-4322d.firebaseapp.com",
  projectId: "clone-4322d",
  storageBucket: "clone-4322d.appspot.com",
  messagingSenderId: "697252347701",
  appId: "1:697252347701:web:894531d1bbacd7f196567c",
  measurementId: "G-GWNFWSDXV9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };