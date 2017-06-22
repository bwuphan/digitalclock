import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: 'hello',
      }
      this.getTime = this.getTime.bind(this);
    }
    getTime() {
      var date = new Date();
      this.state.time = date;
    }
    componentDidMount() {
      var getTime = () => {
        var date = new Date().toTimeString().split(" ")[0];
        console.log(date)
        this.setState({'time': date});
        console.log({time: date})
      }
      setInterval(function() {
        getTime();
      }, 1000)
    }
    render() {
      return (
        <div className="App">
          <div className="time">{this.state.time}</div>
        </div>
      );

    }

}

export default App;
