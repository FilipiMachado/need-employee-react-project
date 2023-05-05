import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAT-5KBFYTZdJ_B-TAhuY3wN_aDdFALxR8",
  authDomain: "nemployee-project.firebaseapp.com",
  projectId: "nemployee-project",
  storageBucket: "nemployee-project.appspot.com",
  messagingSenderId: "495159471755",
  appId: "1:495159471755:web:a7c48fbc75ad37486c2e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth, app}