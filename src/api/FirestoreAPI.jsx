import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");

export const PostStatusData = (status) => {
  let object = {
    status: status,
  };
  addDoc(dbRef, object)
    .then(() => {
      toast.success("Post added successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPosts = (setAllStatus) => {
  onSnapshot(dbRef, (res) => {
    setAllStatus(
      res.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};
