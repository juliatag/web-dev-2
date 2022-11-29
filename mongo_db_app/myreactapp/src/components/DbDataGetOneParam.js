import React from "react";
function DbDataGetOneParam() {
  return (
    <>
      <button onClick={callGetQuery}>Get one user using params</button>
    </>
  );
}
export default DbDataGetOneParam;

/* Read-Single (GET) – Query params */
function callGetQuery() {
  fetch("http://localhost:3001/user?username=elie", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
