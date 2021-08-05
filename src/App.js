import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Component } from 'react';


const api = axios.create({
  baseURL: `https://localhost:44378/api/Clients`
})


class App extends Component {
  
  constructor() {
    super();
    
    api.get('/').then(res => {
      console.log(res.data)

    })
  }

  render() {
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
        </header>
      </div>
    );
  }
}
export default App;
