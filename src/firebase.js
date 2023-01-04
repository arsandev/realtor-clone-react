// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClvHZx7X93whYvyQ08RCXNE8mMiVgS8oo",
  authDomain: "realtor-clone-react-6a966.firebaseapp.com",
  projectId: "realtor-clone-react-6a966",
  storageBucket: "realtor-clone-react-6a966.appspot.com",
  messagingSenderId: "104039293778",
  appId: "1:104039293778:web:e4cd621fc90f1377ba108b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()