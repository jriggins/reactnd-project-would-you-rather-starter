import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends React.Component {
  render() {
    const { loggedInUser } = this.props;

    return loggedInUser === null ? null : (
      <div id="add-question-link">
        <Link to="/">Home</Link>
        <Link to="/add">Add Question</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser }) {
  return {
    loggedInUser
  };
}

export default connect(mapStateToProps)(Navigation);
