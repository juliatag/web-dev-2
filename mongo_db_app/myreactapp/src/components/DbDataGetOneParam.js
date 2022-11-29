import React from "react";
import Button from "./button";

function DbDataGetOneParam() {
  return <Button event={callGetQuery} title={"Get user (by username param)"} />;
}
export default DbDataGetOneParam;

/* Read-Single (GET) – Query params */
function callGetQuery() {
  fetch("http://localhost:3001/user?username=elie", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
