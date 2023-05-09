import { useMemo, useState } from "react";

import Home from "../Pages/Home";
import Topbar from "../components/common/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});

  console.log(currentUser)

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div>
      <Topbar />
      <Home currentUser={currentUser} />
    </div>
  );
}
