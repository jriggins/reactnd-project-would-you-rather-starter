import React from 'react';

function Login(props) {
  return (
    <div className="Login">
      <form>
        <select className="users">
          <option className="user">Sarah Edo</option>
          <option className="user">Tyler McGinnis</option>
          <option className="user">John Doe</option>
        </select>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Login

