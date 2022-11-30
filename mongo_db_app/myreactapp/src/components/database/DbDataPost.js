import React from "react";
import Button from "../button";

function DbDataPost() {
  return <Button event={callPostBody} title={"Create new user"} />;
}
export default DbDataPost;

/* Create (POST) */
function callPostBody() {
  fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify({
      username: "elie",
      password: "EliePassword",
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
