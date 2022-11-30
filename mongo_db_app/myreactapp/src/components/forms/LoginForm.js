import React, { useRef } from "react";
import { LoggedInContext } from "../../App";

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    login(usernameRef, passwordRef, setIsLoggedIn, isLoggedIn);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <label htmlFor="username">Username</label>
      <input id="username" type="text" ref={usernameRef} required />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" ref={passwordRef} required />
      <button className="btn" type="submit">
        Login
      </button>
    </form>
  );
}
export default LoginForm;

function login(usernameRef, passwordRef, setIsLoggedIn, isLoggedIn) {
  fetch("http://localhost:3001/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => {
      json.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
      alert(JSON.stringify(json));
      alert(isLoggedIn);
    });
}
