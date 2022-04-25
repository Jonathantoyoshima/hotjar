import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const StyledText = styled.p`
  color: red;
  font-size: 2em;
  border: 1px solid red;
  padding: 0.5em;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledText>Here a styled Text</StyledText>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  );
}

export default App;
