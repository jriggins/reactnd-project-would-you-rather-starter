import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './components/login';
import { getUsers } from './api';
import { receiveUsers } from './actions/users';

function loadInitialData() {
  return (dispatch) => {
    return getUsers().then((users) => (
      dispatch(receiveUsers(users))
    ));
  }
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadInitialData());
  }

  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default connect()(App);
