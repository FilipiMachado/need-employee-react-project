//import { /* useMemo, */ useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { onLogout } from "../../../api/AuthAPI";
//import { getCurrentUser } from "../../../api/FirestoreAPI";
import Button from "../Button";
import "./index.scss";

export default function ProfilePopup() {
  //let navigate = useNavigate();
  /* const [currentUser, setCurrentUser] = useState({}); */
  /* useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []); */
  return (
    <div className="popup-card">
      <p className="name">1</p>
      <p className="headline">1</p>
      <Button
        title="View Profile"
        
      />
      <Button title="Log out" />
    </div>
  );
}