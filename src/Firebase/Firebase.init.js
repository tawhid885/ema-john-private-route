import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

// Initialize Firebase
const firebaseInit=()=>{
    initializeApp(firebaseConfig);
}

export default firebaseInit;
