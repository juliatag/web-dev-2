import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function SigninButton() {
  const navigate = useNavigate();
  //need binding if not using an extra function to pass the destination
  return <Button event={navigate.bind(this, "/signin")} title={"Signin"} />;
}
export default SigninButton;
