import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: { id: '' }
    };
  }

  onUserSelected = (event) => {
    const selectedUserId = event.target.value;
    const selectedUser = Object.values(this.props.users).filter((user) => user.id === selectedUserId)[0] || { id: '' };
    this.setState({ selectedUser: selectedUser });
  };

  onLoginSubmitted = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state.selectedUser);
  };

  render() {
    const { loggedInUser, users } = this.props;
    const { selectedUser } = this.state;

    return loggedInUser === null ? (
      <form onSubmit={this.onLoginSubmitted}>
        <label htmlFor="login_users">Login</label>
        <select id="login_users" data-testid="login_users" value={selectedUser.id} onChange={this.onUserSelected}>
          <option key="default" data-testid="default" value="">
            --- Please select a user ---
          </option>
          {Object.values(users).map((user) => {
            return (
              <option key={user.id} data-testid={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <input className="button" type="submit" value="Login" />
      </form>
    ) : (
      <Redirect to={{ pathname: '/' }} />
    );
  }
}

function mapStateToProps({ users = {}, loggedInUser }) {
  return {
    users,
    loggedInUser
  };
}

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
