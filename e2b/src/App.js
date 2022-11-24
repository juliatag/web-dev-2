import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React App in Github</p>
          <ul style={{ textAlign: "left", fontSize: "12px" }}>
            <li>changed windows credentials</li>
            <li>connected and pushed to github through VSCode</li>
            <li>added repo in github desktop </li>
            <li>tested push and synch between vs code and desktop</li>
            <li>all good</li>
            <li>changed language to Javascript React in VS coded</li>
          </ul>
          <p>by Julieta G.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <p> testing empty fragment</p>
    </>
  );
}

export default App;
