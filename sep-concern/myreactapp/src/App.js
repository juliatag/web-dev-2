import React from "react";
import "./App.css";

function App() {
  /* Destructuring */
  const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem("color")) || "rgb(183, 28, 200)");
  const [counter, setCounter] = React.useState(JSON.parse(localStorage.getItem("counter")) || 0);

  React.useEffect(() => {
    sessionStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [color, counter]);

  return (
    <div className="container">
      {/* This component has two children that display a message and a clock */}
      <DisplayMessage color={color} />
      <Clock />
      <DisplayCounter counter={counter} />
      <UserActions setColor={setColor} setCount={setCounter} counter={counter} color={color} />
    </div>
  );
}

/*****************************  App Components *********************************************/

//for the message
function DisplayMessage(props) {
  return (
    <h1 className="text-center" style={{ color: props.color }}>
      React with State and LocalStorage
    </h1>
  );
}

function Clock() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  React.useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <p className="text-center">
      React Clock: <span className="bold">{time}</span>
    </p>
  );
}

//for the message
function DisplayCounter(props) {
  return (
    <p className="text-center bold">
      Title Color changed <span className="count">{props.counter}</span> times
    </p>
  );
}

function UserActions(props) {
  return (
    <div className="text-center">
      <button
        className="btn"
        onClick={() => {
          props.setColor(toggle(props.color));
          props.setCount(props.count + 1);
        }}
      >
        Click me React
      </button>
    </div>
  );
}

function toggle(color) {
  if (color === "rgb(183, 28, 200)") {
    return "rgb(9, 146, 146";
  } else {
    return "rgb(183, 28, 200)";
  }
}
export default App;
