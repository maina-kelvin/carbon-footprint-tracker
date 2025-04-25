import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqXfxrQXwOb_Y9Ack-tzTLKoMLkzjpAC4",
  authDomain: "carbon-footprint-tracker-13c4c.firebaseapp.com",
  projectId: "carbon-footprint-tracker-13c4c",
  storageBucket: "carbon-footprint-tracker-13c4c.firebasestorage.app",
  messagingSenderId: "600660909435",
  appId: "1:600660909435:web:675e783ab82fe415efb1de",
  measurementId: "G-XFBPQ4GLX2"
};

const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

//trial comment