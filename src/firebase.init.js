// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_s8BMxGb10xh3NbvxeT0q23OPE1_A0ms",
  authDomain: "ema-john-simple-af212.firebaseapp.com",
  projectId: "ema-john-simple-af212",
  storageBucket: "ema-john-simple-af212.appspot.com",
  messagingSenderId: "136369900237",
  appId: "1:136369900237:web:588d03b99e78e6ec66b784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;