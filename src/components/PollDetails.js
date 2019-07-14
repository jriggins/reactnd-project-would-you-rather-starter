import React from "react";
import { connect } from "react-redux";

import { savePollAnswer } from '../actions';
import NotFound from './NotFound';

class PollDetails extends React.Component {
  state = {
    answer: ''
  };

  getAnsweredClass = (option) => {
    return this.props.answer === option ? "answered" : "answered-no";
  };

  renderAnswered = () => {
    const {
      question,
      optionOne,
      optionTwo,
      optionOneVoteCount,
      optionTwoVoteCount,
      optionOneVotePercentage,
      optionTwoVotePercentage,
      totalVoteCount
    } = this.props;

    return(
      <div>
        <h3>Question Details (Your Answer is in <span className="answered">Green</span>)</h3>
        <img className="avatar" src={question.authorAvatarURL} alt={question.author}/>
        <h4 className={this.getAnsweredClass("optionOne")}>Option One ({optionOneVoteCount} of {totalVoteCount} Votes {optionOneVotePercentage}%)</h4>
        <p className="option">{optionOne}</p>

        <h4 className={this.getAnsweredClass("optionTwo")}>Option Two ({optionTwoVoteCount} of {totalVoteCount} Votes {optionTwoVotePercentage}%)</h4>
        <p className="option">{optionTwo}</p>
      </div>
    );
  };

  handlePollAnswerSubmitted = (event) => {
    const { loggedInUser, question } = this.props;
    event.preventDefault();
    this.props.savePollAnswer(loggedInUser.id, question.id, this.state.answer);
  };

  handlePollAnswerChanged = (event) => {
    this.setState({
      answer: event.target.value
    });
  };

  renderUnanswered = () => {
    const {
      question,
      optionOne,
      optionTwo
    } = this.props;

    return(
      <div>
        <h3>Would You Rather?</h3>
        <img className="avatar" src={question.authorAvatarURL} alt={question.author}/>
        <form onSubmit={this.handlePollAnswerSubmitted} onChange={this.handlePollAnswerChanged}>
          <label>
            <input name="answer" type="radio" value="optionOne"/>
            {optionOne}
          </label>
          <br/>
          <label>
            <input name="answer" type="radio" value="optionTwo"/>
            {optionTwo}
          </label>
          <br/>
          <input type="submit" value="Submit Answer"/>
        </form>
      </div>
    )
  };

  render() {
    const { question, isAnswered } = this.props;

    return (
      (question === null) ?
        <NotFound message="Could not find the poll that you were looking for. Sorry!"/>
        :
        <div>
          <div className="PollDetails">
            { isAnswered ? this.renderAnswered() : this.renderUnanswered() }
          </div>
        </div>
    );
  }
}

function getUsersAnswer(loggedInUser, question) {
  return loggedInUser.answers[question.id] || "";
}

function getQuestionById(questionId, questions, users) {
  let filteredQuestion = Object.values(questions).filter((question) => (question.id === questionId))[0];
  return (
    filteredQuestion === undefined ?
      null
      :
      {
        ...filteredQuestion,
        authorAvatarURL: filteredQuestion.authorAvatarURL = users && process.env.PUBLIC_URL + users[filteredQuestion.author].avatarURL
      }
  );
}

function mapStateToProps({ loggedInUser, questions, users }, props) {
  const { questionId } = props.match.params;
  const question = getQuestionById(questionId, questions, users);

  if (question === null) {
    return {
      question
    }
  } else {
    const optionOneVoteCount = question.optionOne.votes.length;
    const optionTwoVoteCount = question.optionTwo.votes.length;
    const totalVoteCount = optionOneVoteCount + optionTwoVoteCount;
    const optionOneVotePercentage = optionOneVoteCount / totalVoteCount * 100;
    const optionTwoVotePercentage = optionTwoVoteCount / totalVoteCount * 100;
    const answer = getUsersAnswer(loggedInUser, question);
    const isAnswered = answer !== "";

    return {
      question,
      optionOne: question.optionOne.text,
      optionOneVoteCount,
      optionOneVotePercentage,
      optionTwo: question.optionTwo.text,
      optionTwoVoteCount,
      optionTwoVotePercentage,
      totalVoteCount,
      answer,
      isAnswered,
      loggedInUser
    }
  }
}

const mapDispatchToProps = {
  savePollAnswer
};

export default connect(mapStateToProps, mapDispatchToProps)(PollDetails);
