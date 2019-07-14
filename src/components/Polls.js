import React from 'react';
import { connect } from 'react-redux';
import PollList from './PollList';

class Polls extends React.Component {
  state = {
    pollView: 'unansweredPolls'
  };

  handlePollViewChanged = (event) => {
    this.setState({ pollView: event.target.value });
  };

  render() {
    return (
      <div className="Polls">
        <select value={this.state.pollView} onChange={this.handlePollViewChanged}>
          <option value="unansweredPolls">Unanswered Polls</option>
          <option value="answeredPolls">Answered Polls</option>
        </select>
        <div>
          <PollList polls={this.props[this.state.pollView]} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser, questions }) {
  const didUserAnswerQuestion = (user, question) => Object.keys(user.answers).includes(question.id);
  const answeredPolls = (loggedInUser, questions) =>
    questions.filter((question) => didUserAnswerQuestion(loggedInUser, question));
  const unansweredPolls = (loggedInUser, questions) =>
    questions.filter((question) => !didUserAnswerQuestion(loggedInUser, question));
  const sortByTimestampAscending = Object.values(questions).sort((a, b) => a.timestamp - b.timestamp);

  return {
    unansweredPolls: unansweredPolls(loggedInUser, sortByTimestampAscending),
    answeredPolls: answeredPolls(loggedInUser, sortByTimestampAscending),
    loggedInUser
  };
}

export default connect(mapStateToProps)(Polls);
