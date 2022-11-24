import React from "react";
import "./App.css";

function App() {
  /* Destructuring */
  const [color, setColor] = React.useState(
    JSON.parse(sessionStorage.getItem("color")) || "rgb(183, 28, 200)"
  );
  const [counter, setCounter] = React.useState(
    JSON.parse(localStorage.getItem("counter")) || 0
  );
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    sessionStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("counter", JSON.stringify(counter));

    setTime(new Date().toLocaleTimeString());
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      5000
    );
    return () => {
      clearInterval(interval);
    };
  }, [color, counter]);

  return (
    <div className="container">
      {/* This component has two children that display a message and a clock */}
      <DisplayMessage color={color} />
      <Clock2 time={time} />
      <DisplayCounter counter={counter} />

      <div className="text-center">
        <button
          className="btn "
          onClick={() => {
            setColor(toggle(color));
            setCounter(counter + 1);
          }}
        >
          Click me React
        </button>
      </div>
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

//for the message
function DisplayMessage(props) {
  return (
    <h1 className="text-center" style={{ color: props.color }}>
      React with State and LocalStorage
    </h1>
  );
}

//using class component for counter just to test
//Using Component or PureComponent ? : https://stackoverflow.com/questions/41340697/react-component-vs-react-purecomponent
class Clock2 extends React.Component {
  render() {
    return (
      <p className="text-center">
        React Class based Clock : {this.props.time}{" "}
      </p>
    );
  }
}

//for the message
function DisplayCounter(props) {
  return (
    <p className="text-center bold">
      Title Colour changed <span className="count">{props.counter}</span> times
    </p>
  );
}

/*********************************** MAIN ************************************/
//using one parent component

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Main />); // first load
// setInterval(() => root.render(<Main />), 1000);

export default App;
