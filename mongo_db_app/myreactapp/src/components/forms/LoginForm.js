import React, { useRef } from "react";
import { LoggedInContext } from "../../App";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  //omit isLoggedIn since not using it here but still nee dthe comma
  const [, setIsLoggedIn] = React.useContext(LoggedInContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    login(usernameRef, passwordRef, setIsLoggedIn, navigate);
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

function login(usernameRef, passwordRef, setIsLoggedIn, navigate) {
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
      json.success
        ? (() => {
            setIsLoggedIn(true);
            navigate("/crud");
          })()
        : alert("unsuccessful login");
    });
}
