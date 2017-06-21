import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: null,
      }
      this.getTime = this.getTime.bind(this);
    }
    getTime() {
      var date = new Date();
      this.state.time = date;
    };
    componentDidMount() {
      setInterval(function() {
        getTime();
      }, 1000)
    }
    render() {
      console.log(this.state)
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );

    }

}

export default App;
