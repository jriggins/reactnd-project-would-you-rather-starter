import React from 'react';

const Login = ({users}) => {
  return(
    <div>
      <form>
        <label htmlFor="login_users">Login</label>
        <select id="login_users">
          <option data-testid="default">--- Please select a user ---</option>
          {
            Object.values(users || {}).map((user) => {
              return <option key={user.id} data-testid={user.id}>{user.name}</option>
            })
          }
        </select>
      </form>
    </div>
  );
};

export default Login;
