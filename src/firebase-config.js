import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0QxXki_UyjKJZx7PZrodkMggFSoa2icw",
  authDomain: "netronik-89bb9.firebaseapp.com",
  projectId: "netronik-89bb9",
  storageBucket: "netronik-89bb9.firebasestorage.app",
  messagingSenderId: "506643085475",
  appId: "1:506643085475:web:292a24d652d5a0be00e716",
  measurementId: "G-J3KPF8NPWH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default app;
