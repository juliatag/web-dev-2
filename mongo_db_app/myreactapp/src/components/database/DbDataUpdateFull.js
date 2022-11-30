import React from "react";
import Button from "../global/button";

function DbDataUpdateFull() {
  return <Button event={callPutBody} title={"Update user (put and body)"} />;
}
export default DbDataUpdateFull;

/* Update – Full (PUT) */
function callPutBody() {
  fetch("http://localhost:3001/users", {
    method: "PUT",
    body: JSON.stringify({
      username: "elie",
      password: "1256",
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
