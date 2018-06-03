import React, { Component } from 'react';
import NotificationComponent from './components/notification';
import { connect } from 'react-redux';
import successfulRequest from './actions/successful-request-action';
import errorRequest from './actions/error-request-action';
import warningRequest from './actions/warning-request-action';
import infoRequest from './actions/info-request-action';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content-wrapper">
          <h2>REACT REDUX GENERIC NOTIFICATION SYSTEM</h2>
          <button className="btn btn-success" onClick={this.props.successfulRequest}>Show Success Alert</button>
          <button className="btn btn-danger" onClick={this.props.errorRequest}>Show Error Alert</button>
          <button className="btn btn-warning" onClick={this.props.warningRequest}>Show warning Alert</button>
          <button className="btn btn-info" onClick={this.props.infoRequest}>Show Info Alert</button>
        </div>
        <NotificationComponent />
      </div>
    );
  }
}

export default connect(null, { successfulRequest, errorRequest, warningRequest, infoRequest})(App);
