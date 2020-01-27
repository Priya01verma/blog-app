import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Store from './Client';
import Store from './MultipleClient';
import { Provider } from 'react-redux';
import MainPage from './components/blogs/MainPage';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <MainPage/>
    </div>
    </Provider>
  );
}

export default App;
