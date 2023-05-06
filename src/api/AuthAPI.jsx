import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";

export const LoginAPI = (email, password) => {
  try {
    let res = signInWithEmailAndPassword(auth, email, password);
    return res
  } catch (err) {
    console.log(err);
  }
};

export const RegisterAPI = (email, password) => {
  try {
    let res = createUserWithEmailAndPassword(auth, email, password);
    return res
  } catch (err) {
    return err
  }
};

export const GoogleSignInAPI = () => {
  try {
    let googleProvider = new GoogleAuthProvider()
    let res = signInWithPopup(auth, googleProvider)
    toast.success("Account created successfully!")
    return res
  } catch (err) {
    toast.error("Something wrong happened while creating your google account!")
    return err
  }
};
