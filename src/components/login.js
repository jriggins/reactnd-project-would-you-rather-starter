import React from 'react';
import { connect } from 'react-redux';

const NULL_USER = { id: '' };

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: NULL_USER
    };
  }

  needsToSetSelectedUser = (prevProps) => {
    return !prevProps.users && this.props.users;
  }

  componentDidUpdate(prevProps) {
    if (this.needsToSetSelectedUser(prevProps)) {
      this.setState({selectedUser: Object.values(this.props.users)[0]})
    }
  }

  render() {
    const users = this.props.users || {};
    const onLogin = this.props.onLogin || (() => null);
    const selectedUser = this.state.selectedUser;

    const renderUsers = (users) => {
      return Object.values(users).map((user) => (
        <option key={user.id} value={user.id} className="user">{user.name}</option>
      ));
    };

    const handleLogin = (event, selectedUser, callback) => {
      callback(selectedUser);
    };

    const handleUserSelect = (event) => {
      this.setState({ selectedUser: users[event.target.value] });
    };

    return (
      <div>
        <div>
          <select data-testid="userSelect" onChange={handleUserSelect} value={selectedUser.id}>
            {renderUsers(users)}
          </select>
          <button onClick={(event) => handleLogin(event, this.state.selectedUser, onLogin)}>Sign In</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {users: {}}) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Login)
