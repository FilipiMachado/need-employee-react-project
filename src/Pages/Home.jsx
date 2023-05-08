import { useEffect, useState } from "react";

import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      }
      else {
        setLoading(false)
      }
    });
  }, [navigate]);

  return loading ? <Loader /> : <HomeComponent />;
}
