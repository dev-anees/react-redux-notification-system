import React, { Component } from 'react';
import NotificationComponent from './components/notification';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
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
        <div className="github-button-container">
          <GitHubButton className="github-button" type="forks" size="large" namespace="anees715" repo="react-redux-notification-system" />
          <GitHubButton className="github-button" type="stargazers" size="large" namespace="anees715" repo="react-redux-notification-system" />
        </div>
        <div className="content-wrapper">
          <h2>REACT REDUX GENERIC NOTIFICATION SYSTEM</h2>
          <button className="btn btn-success" onClick={this.props.successfulRequest}>Successful Request</button>
          <button className="btn btn-danger" onClick={this.props.errorRequest}>Error Request</button>
          <button className="btn btn-warning" onClick={this.props.warningRequest}>Response With A Warning Message</button>
          <button className="btn btn-info" onClick={this.props.infoRequest}>Response With An Info</button>
        </div>
        <NotificationComponent />
      </div>
    );
  }
}

export default connect(null, { successfulRequest, errorRequest, warningRequest, infoRequest})(App);
