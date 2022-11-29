import React from "react";
function DbDataUpdateFull() {
  return (
    <>
      <button onClick={callPutBody}>Update Full</button>
    </>
  );
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
