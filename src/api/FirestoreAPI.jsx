import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot, getDocs, /* doc, updateDoc */ } from "firebase/firestore";
import { toast } from "react-toastify";

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");

export const postStatusData = (object) => {
  addDoc(postsRef, object)
    .then(() => {
      toast.success("Post added successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPosts = (setAllStatus) => {
  onSnapshot(postsRef, (res) => {
    setAllStatus(
      res.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = async (setCurrentUser) => {
  const response = await getDocs(userRef);
  const currentUser = response.docs
    .map((docs) => {
      return { ...docs.data(), userId: docs.id };
    })
    .filter((item) => {
      return item.email === localStorage.getItem("userEmail");
    })[0];
  setCurrentUser(currentUser);
};

export const editProfile = () => {
  
}

/* export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), userId: docs.id };
        })
        .filter((item) => {
          return item.email === localStorage.getItem("userEmail");
        })[0]
    );
  });
}; */
