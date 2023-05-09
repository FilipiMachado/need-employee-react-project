import { useMemo } from "react";

import Home from "../Pages/Home";
import Topbar from "../components/common/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";

export default function HomeLayout() {
  useMemo(() => {
    getCurrentUser()
  }, [])
  return (
    <div>
      <Topbar />
      <Home />
    </div>
  );
}
