import React, { useState, useEffect } from "react";
import DisplayMessage from "./DisplayMessage";
import DisplayCounter from "./DisplayCounter";
import Clock from "./Clock";
import UserActions from "./UserActions";

function Main() {
  /* Destructuring */
  const [color, setColor] = useState(JSON.parse(sessionStorage.getItem("color")) || "rgb(183, 28, 200)");
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")) || 0);

  useEffect(() => {
    sessionStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [color, counter]);

  return (
    <>
      {/* This component has two children that display a message and a clock */}
      <DisplayMessage color={color} />
      <Clock />
      <DisplayCounter counter={counter} />
      <UserActions setColor={setColor} setCounter={setCounter} counter={counter} color={color} />
    </>
  );
}
export default Main;
