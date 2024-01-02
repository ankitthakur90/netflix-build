import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBG-d8mJy5yTiACfWD55zBmg4VqsEJg9yo",
  authDomain: "netflix-clone-build-aea95.firebaseapp.com",
  projectId: "netflix-clone-build-aea95",
  storageBucket: "netflix-clone-build-aea95.appspot.com",
  messagingSenderId: "785651712898",
  appId: "1:785651712898:web:e4f0c8027447e02f28c59b",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;