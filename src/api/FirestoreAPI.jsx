import { firestore } from "../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  getDocs,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");
let likeRef = collection(firestore, "likes");
let commentsRef = collection(firestore, "comments");

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

export const editProfile = (userId, payload) => {
  let userToEdit = doc(userRef, userId);

  updateDoc(userToEdit, payload)
    .then(() => {
      toast.success("Profile updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const likePost = (userId, postId, liked) => {
  try {
    const docToLike = doc(likeRef, `${userId}_${postId}`);
    if (liked) {
      deleteDoc(docToLike);
    } else {
      setDoc(docToLike, { userId, postId });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLikesByUser = (userId, postId, setLiked, setLikesCount) => {
  try {
    let likeQuery = query(likeRef, where("postId", "==", postId));

    onSnapshot(likeQuery, (response) => {
      let likes = response.docs.map((doc) => doc.data());
      let likesCount = likes?.length;

      const isLiked = likes.some((like) => like.userId === userId);

      setLikesCount(likesCount);
      setLiked(isLiked);
    });
  } catch (error) {
    console.log(error);
  }
};

export const postComment = (postId, comment, timeStamp) => {
  try {
    addDoc(commentsRef, {
      postId,
      comment,
      timeStamp,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getComments = (postId, setComments) => {
  try {
    let singlePostQuery = query(commentsRef, where("postId", "==", postId));

    onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setComments(comments);
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleStatus = (setAllStatus, id) => {
  const singlePostQuery = query(postsRef, where("userId", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    )[0];
  });
};

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
