import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDf12nXFefKw9gqkDI1MMeSFVfUrhxt9I",
  authDomain: "linkpage-de56d.firebaseapp.com",
  projectId: "linkpage-de56d",
  storageBucket: "linkpage-de56d.appspot.com",
  messagingSenderId: "443209707972",
  appId: "1:443209707972:web:7c29d8aede459d3fef3491",
  measurementId: "G-BQWLHKXPTW"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};