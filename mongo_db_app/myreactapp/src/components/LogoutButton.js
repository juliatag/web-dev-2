import { LoggedInContext } from "../App";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function LogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    //navigate("/");
  };

  return <Button event={logout} title={"Logout"} />;
}
export default LogoutButton;
