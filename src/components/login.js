import React from 'react';

function Login(props) {
  const users = props.users || {};
  const onLogin = props.onLogin || (() => null);
  // let selectedUser = Object.values(users)[0];
  let selectedUser = Object.values(users)[0];

  const renderUsers = (users, selectedUser) => {
    return Object.values(users).map((user) => (
      <option key={user.id} value={user.id} className="user">{user.name}</option>
    ));
  }

  const getSelectedUser = (event) => {
    return users[event.target.value];
  }

  const handleLogin = (event, selectedUser, callback) => {
    console.log('User: ', selectedUser)
    callback(selectedUser);
  }

  const handleUserSelect = (event) => {
    // TODO: Is this internal state change bad?
    console.log('User selected')
    selectedUser = getSelectedUser(event);
  }

  console.log("Rendering: ", new Date().getTime())
  return (
    <div>
      <div>
        <select data-testid="userSelect" onChange={handleUserSelect}>
          { renderUsers(users, selectedUser) }
        </select>
        <button onClick={(event) => handleLogin(event, selectedUser, onLogin)}>Sign In</button>
      </div>
    </div>
  );
}

export default Login

