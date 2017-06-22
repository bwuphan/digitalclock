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
    }
    componentDidMount() {
      var getTime = () => {
        var date = new Date()
        var meridian = 'am';
        var hours = date.getHours();
        var dateArray = date.toTimeString().split(" ")[0].split(':');
        if (parseInt(hours) === 0) {
          dateArray[0] = '12';
        } else if (parseInt(hours) > 12) {
          meridian = 'pm';
          dateArray[0] = (dateArray[0] - 12).toString();
        }
        var dateString = dateArray.join(':') + meridian;
        this.setState({'time': dateString});
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
