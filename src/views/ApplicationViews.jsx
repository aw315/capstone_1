import { useEffect, useState } from "react";
import { UserViews } from "./UserViews.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localUser = localStorage.getItem("guru_user");
    const guruUser = JSON.parse(localUser);
    setCurrentUser(guruUser);
  }, []);

  return (
    <UserViews currentUser={currentUser} />
  )
};
