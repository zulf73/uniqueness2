import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const ocean = [3, 3, 2, 2, 3];

class VirtueList extends Component {


  render() {
    return (
      "In the darkest night of your life, these are the virtues that will assist you."
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>

          Hello world.
        </p>
        <VirtueList />
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
