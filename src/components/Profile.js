import React from 'react';
import { connect } from 'react-redux';

import Logout from './Logout';

function Profile({ loggedInUser }) {
  return loggedInUser !== null ? (
    <div className="Profile">
      <p>Logged In: {loggedInUser.id}</p>
      <Logout />
    </div>
  ) : null;
}

function mapStateToProps({ loggedInUser }) {
  return {
    loggedInUser
  };
}

export default connect(mapStateToProps)(Profile);
