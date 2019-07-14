import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Polls from './Polls';
import Profile from './Profile';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Profile/>
        <p>Home</p>
        <div id="add-question-link">
          <Link to='/add'>Add Question</Link>
          <Link to='/leaderboard'>Leaderboard</Link>
        </div>
        <Polls/>
      </div>
    );
  }
}

export default connect()(Home)
