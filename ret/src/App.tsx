import React, { useEffect } from "react";
import icon from "./icon.svg";
import "./App.css";

function App() {
  useEffect(() => {
    window.api.helloWorld("hi");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
        <p>RET - React Electron Typescript</p>
        <a className="App-link" href="https://github.com/smiilliin" target="_blank" rel="noopener noreferrer">
          smiilliin
        </a>
      </header>
    </div>
  );
}

export default App;
