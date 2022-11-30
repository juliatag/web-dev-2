import Button from "./button";

function Login() {
  return <Button event={loginUser} title={"Login"} />;
}
export default Login;

function loginUser() {
  fetch("http://localhost:3001/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: "thussainz",
      password: "Abcd1234!",
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
