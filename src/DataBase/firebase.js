// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdXZpddQOFMG6efttLptdRHt1-60faJvc",
  authDomain: "tesla-clone-1cd77.firebaseapp.com",
  projectId: "tesla-clone-1cd77",
  storageBucket: "tesla-clone-1cd77.appspot.com",
  messagingSenderId: "560812482946",
  appId: "1:560812482946:web:72c6a65f57a86ad5be6f9b",
  measurementId: "G-6J7V18558G"
};

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);

  // const auth = app.auth()

  export { auth }