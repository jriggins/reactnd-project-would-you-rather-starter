import React from 'react';

function Login(props) {
  const users = props.users || {};

  function renderUsers(users) {
    return Object.values(users).map((user) => (
      <option key={user.id} className="user">{user.name}</option>
    ));
  }

  return (
    <div>
      <form>
        <select>
          { renderUsers(users) }
        </select>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Login

