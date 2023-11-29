import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnWoebeDRE75S4X79rE228nE5zqyeYk2Y",
  authDomain: "chat-app-f283f.firebaseapp.com",
  projectId: "chat-app-f283f",
  storageBucket: "chat-app-f283f.appspot.com",
  messagingSenderId: "859543375353",
  appId: "1:859543375353:web:193c61a54ee65e05bb4128"
};


const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };