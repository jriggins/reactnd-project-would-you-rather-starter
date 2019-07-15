import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../actions/auth';

function Logout({ loggedInUser, logoutUser, history }) {
  const handleLogoutUser = (event) => {
    event.preventDefault();
    logoutUser(loggedInUser);
    history.push('/');
  };

  return (
    <div>
      <button onClick={handleLogoutUser}>Logout</button>
    </div>
  );
}

function mapStateToProps({ loggedInUser }) {
  return {
    loggedInUser
  };
}

const mapDispatchToProps = {
  logoutUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout)
);
