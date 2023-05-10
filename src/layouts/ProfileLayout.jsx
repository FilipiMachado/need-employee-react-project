import { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";

import Profile from "../Pages/Profile";
import Topbar from "../components/common/Topbar";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
    console.log(currentUser)
  }, []);

  return (
    <div>
      <Topbar />
      <Profile currentUser={currentUser} />
    </div>
  );
}

