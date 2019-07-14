import React from 'react';
import { connect } from 'react-redux';

import Logout from './Logout';

class Profile extends React.Component {
  render() {
    const { loggedInUser } = this.props;

    if (loggedInUser !== null) {
      return (
        <div className="Profile">
          <p>Logged In: {loggedInUser.id}</p>
          <Logout/>
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps({loggedInUser}) {
  return {
    loggedInUser
  };
}

export default connect(mapStateToProps)(Profile);
