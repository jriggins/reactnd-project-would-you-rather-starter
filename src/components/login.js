import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: {}
    };
  }

  render() {
    const users = this.props.users || {};
    const onLogin = this.props.onLogin || (() => null);

    const renderUsers = (users, selectedUser) => {
      return Object.values(users).map((user) => (
        <option key={user.id} value={user.id} className="user">{user.name}</option>
      ));
    }

    const getSelectedUser = (event) => {
      return users[event.target.value];
    }

    const handleLogin = (event, selectedUser, callback) => {
      callback(selectedUser);
    }

    const handleUserSelect = (event) => {
      this.setState({ selectedUser: getSelectedUser(event) });
    }

    return (
      <div>
        <div>
          <select data-testid="userSelect" onChange={handleUserSelect}>
            {renderUsers(users, this.state.selectedUser)}
          </select>
          <button onClick={(event) => handleLogin(event, this.state.selectedUser, onLogin)}>Sign In</button>
        </div>
      </div>
    );
  }
}

export default Login

