import React, { useEffect } from "react";
import icon from "./icon.svg";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

function App() {
  useEffect(() => {
    window.api.helloWorld("hi");
  }, []);

  return (
    <Container>
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
        <p>RET - React Electron Typescript</p>
        <a
          className="App-link"
          href="https://github.com/smiilliin"
          target="_blank"
          rel="noopener noreferrer"
        >
          smiilliin
        </a>
      </header>
    </Container>
  );
}

export default App;
