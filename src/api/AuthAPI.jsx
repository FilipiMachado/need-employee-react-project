import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};
