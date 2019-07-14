import React from 'react';
import { connect } from 'react-redux';

import Logout from './Logout';

function Profile({ loggedInUserId }) {
  return (
    <div className="Profile">
      <p>Logged In: {loggedInUserId}</p>
      <Logout />
    </div>
  );
}

function mapStateToProps({ loggedInUserId }) {
  return {
    loggedInUserId
  };
}

export default connect(mapStateToProps)(Profile);
