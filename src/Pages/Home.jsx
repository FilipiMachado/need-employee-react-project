import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader";

export default function Home({ currentUser }) {
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

  return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
}

Home.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
