import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './components/login';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'RECEIVE_USERS',
      users: {
        sarahedo: {
          id: 'sarahedo',
          name: 'Sarah Edo',
        },
        tylermcginnis: {
          id: 'tylermcginnis',
          name: 'Tyler McGinnis',
        },
        johndoe: {
          id: 'johndoe',
          name: 'John Doe',
        }
      }
    });
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
