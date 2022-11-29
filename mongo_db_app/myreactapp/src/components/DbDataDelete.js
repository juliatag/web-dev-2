import React from "react";
function DbDataDelete() {
  return (
    <>
      <button onClick={callDeleteParams}>Delete user</button>
    </>
  );
}
export default DbDataDelete;

/* Update – Partial (PATCH) */
function callDeleteParams() {
  fetch("http://localhost:3001/users/julieta", { method: "DELETE" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
