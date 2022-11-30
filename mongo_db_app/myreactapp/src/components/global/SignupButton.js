import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function SignupButton() {
  const navigate = useNavigate();
  //need binding if not using an extra function to pass the destination
  return <Button event={navigate.bind(this, "/signup")} title={"Sigup"} />;
}
export default SignupButton;
