import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmG1aUgI0vDMKUtT5JaGZvA4oaR2m4sAA",
  authDomain: "winquest-6eb4c.firebaseapp.com",
  projectId: "winquest-6eb4c",
  storageBucket: "winquest-6eb4c.firebasestorage.app",
  messagingSenderId: "455853259440",
  appId: "1:455853259440:web:0968902327808ac267d975"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };