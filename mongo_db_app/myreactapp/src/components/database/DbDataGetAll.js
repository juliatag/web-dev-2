import React from "react";
import Button from "../button";

function DbDataGetAll() {
  return <Button event={callGetAll} title={"Get all users"} />;
}
export default DbDataGetAll;

/* Read-All (GET) */
function callGetAll() {
  fetch("http://localhost:3001/users", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
