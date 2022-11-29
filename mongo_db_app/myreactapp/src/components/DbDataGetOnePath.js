import React from "react";
function DbDataGetOnePath() {
  return (
    <>
      <button onClick={callGetParams}>Get one user using path</button>
    </>
  );
}
export default DbDataGetOnePath;

/* Read-Single (GET) – Path params */
function callGetParams() {
  fetch("http://localhost:3001/users/elie", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
