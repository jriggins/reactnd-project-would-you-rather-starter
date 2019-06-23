import React from 'react';
import { connect } from 'react-redux';

class Polls extends React.Component {
  render() {
    return (
      <div>
        <select>
          <option value="unanswered">Unanswered Polls</option>
          <option value="answered">Answered Polls</option>
        </select>
      </div>
    );
  }
}

function unansweredPolls(loggedInUser, questions) {
  console.log('user %o', loggedInUser)
  // return questions.filter((question) {
  // })
}

function mapStateToProps({ loggedInUser }) {
  return {
    unansweredPolls: unansweredPolls(loggedInUser, [])
  };
}

export default connect(mapStateToProps)(Polls);
