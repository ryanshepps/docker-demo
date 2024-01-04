import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [helloWorldResponse, setHelloWorldResponse] = useState();

  const helloWorldBackend = () => {
    axios.get("http://localhost:4000/hello").then((res) => {
      setHelloWorldResponse(res.data);
    }).catch((err) => {
      setHelloWorldResponse("Error!");
    })
  }

  helloWorldBackend();

  return (
    <div className="App">
      <header className="App-header">
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
        <p>{ helloWorldResponse }</p>
      </header>
    </div>
  );
}

export default App;
