import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBq1I3tjkU0bl98AgCD9j3IlYRUlxRBWbg",
  authDomain: "nct-clone.firebaseapp.com",
  projectId: "nct-clone",
  storageBucket: "nct-clone.appspot.com",
  messagingSenderId: "990107830344",
  appId: "1:990107830344:web:d51faa521ad7530b1ab07d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvier = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
