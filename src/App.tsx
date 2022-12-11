import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <h3>I'm Spongebob, Destroyer of Evil!</h3>
      <p>Take it easy.  It's just a drawing.</p>
      <h3>The New Adventures of Mermaidman and BarnacleBoy</h3>
      <p>MermaidMan and BarnacleBoy ...UNITE!!</p>
    </div>
  );
}

export default App;
