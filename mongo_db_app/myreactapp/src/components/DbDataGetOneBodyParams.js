import React from "react";
function DbDataGetOneBodyParams() {
  return (
    <>
      <button onClick={callGetBody}>Get one user using Body params</button>
    </>
  );
}
export default DbDataGetOneBodyParams;

/* Read-Single (POST) – Body params */
function callGetBody() {
  fetch("http://localhost:3001/users/get", {
    method: "POST",
    body: JSON.stringify({
      username: "elie",
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
