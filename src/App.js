import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import FormAwait from './Form';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          FORM PROMISE :
          <Form />
          <div style={ {height:"2px",backgroundColor:"#fff",width:"100%",display:"block",margin:"40px"} }>&nbsp;</div>
          FORM AWAIT :
        <FormAwait />
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
