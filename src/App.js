import React from 'react';
import Login from './Login';
import './App.css';
import { _getUsers as getUsers } from './_DATA';

class App extends React.Component {
  state = {
    users: {}
  };

  componentDidMount() {
    getUsers().then(this.updateUsers);
  }

  updateUsers = (users) => {
    this.setState({ users: users })
  };

  onLogin = (userId) => {
    this.setState({ loggedInUserId: userId });
  };

  render() {
    return (
      <div className="App">
        <Login users={this.state.users} onLogin={this.onLogin}/>
        <p>Logged In: {this.state.loggedInUserId}</p>
      </div>
    );
  };
}

export default App;
