import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function PollList({ polls, loggedInUser }) {
  return (
    <div>
      {polls.map((question) => (
        <div className="Poll" key={question.id}>
          <p>{question.author}</p>
          <p>{question.timestamp}</p>
          <p>{question.optionOne.text}</p>
          <p>{question.optionTwo.text}</p>
          <p>
            <Link
              to={{
                pathname: `/questions/${question.id}`,
                state: { loggedInUser: loggedInUser }
              }}
            >
              View Details
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
}

function mapStateToProps({ loggedInUser }) {
  return {
    loggedInUser
  };
}

export default connect(mapStateToProps)(PollList);
