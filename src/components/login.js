import React from 'react';
import { connect } from 'react-redux';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: props.users ? Object.values(props.users)[0] : {id: ''}
    };
  }

  render() {
    const users = this.props.users || {};
    const onLogin = this.props.onLogin || (() => null);

    const renderUsers = (users) => {
      return Object.values(users).map((user) => (
        <option key={user.id} value={user.id} className="user">{user.name}</option>
      ));
    }

    const handleLogin = (event, selectedUser, callback) => {
      callback(selectedUser);
    }

    const handleUserSelect = (event) => {
      this.setState({ selectedUser: users[event.target.value] });
    }

    return (
      <div>
        <div>
          <select data-testid="userSelect" onChange={handleUserSelect} value={this.state.selectedUser.id}>
            {renderUsers(users)}
          </select>
          <button onClick={(event) => handleLogin(event, this.state.selectedUser, onLogin)}>Sign In</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Login)
