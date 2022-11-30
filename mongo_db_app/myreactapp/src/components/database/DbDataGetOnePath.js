import React from "react";
import Button from "../global/button";

function DbDataGetOnePath() {
  return <Button event={callGetParams} title={"Get user (by username path param)"} />;
}
export default DbDataGetOnePath;

/* Read-Single (GET) – Path params */
function callGetParams() {
  fetch("http://localhost:3001/users/elie", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
