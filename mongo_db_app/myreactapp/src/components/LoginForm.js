import React, { useRef } from "react";
import Button from "./button";

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    login(usernameRef, passwordRef);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" ref={usernameRef} required />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" ref={passwordRef} required />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;

function login(usernameRef, passwordRef) {
  fetch("http://localhost:3001/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameRef,
      password: passwordRef,
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
