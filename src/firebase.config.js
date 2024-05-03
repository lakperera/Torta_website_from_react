// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQDm6-0bk4cyfpOVbVX_0rSOjmlWEjPrY",
  authDomain: "tortaotp.firebaseapp.com",
  projectId: "tortaotp",
  storageBucket: "tortaotp.appspot.com",
  messagingSenderId: "251871024218",
  appId: "1:251871024218:web:f0b414ca444b2437727463",
  measurementId: "G-2V3Y1VE4P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)