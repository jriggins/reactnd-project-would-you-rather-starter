import React from 'react';
import Login from './components/Login';
import { getInitialData } from './utils/api'

class App extends React.Component {
  state = {
    users: {}
  };

  componentDidMount() {
    getInitialData().then((data) => this.updateUsers(data.users));
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
