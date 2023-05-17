import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export const uploadImage = (file) => {
    const profilePics = ref(storage, `files/${file.name}`)
}
