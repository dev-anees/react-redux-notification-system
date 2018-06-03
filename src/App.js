import React, { Component } from 'react';
import NotificationComponent from './components/notification';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content-wrapper">
          <h2>REACT REDUX GENERIC NOTIFICATION SYSTEM</h2>
          <button className="btn btn-success">Show Success Alert</button>
          <button className="btn btn-danger">Show Error Alert</button>
          <button className="btn btn-warning">Show warning Alert</button>
          <button className="btn btn-info">Show Info Alert</button>
        </div>
        <NotificationComponent />
      </div>
    );
  }
}

export default App;
