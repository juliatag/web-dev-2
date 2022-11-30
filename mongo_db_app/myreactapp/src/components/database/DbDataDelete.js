import React from "react";
import Button from "../global/button";

function DbDataDelete() {
  return <Button event={callDeleteParams} title={"Delete user"} />;
}
export default DbDataDelete;

/* Update – Partial (PATCH) */
function callDeleteParams() {
  fetch("http://localhost:3001/users/elie", { method: "DELETE" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
