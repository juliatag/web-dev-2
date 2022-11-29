import React from "react";
function DbDataGetAll() {
  return (
    <>
      <button onClick={callGetAll}>Get all users</button>
    </>
  );
}
export default DbDataGetAll;

/* Read-All (GET) */
function callGetAll() {
  fetch("http://localhost:3001/users", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
