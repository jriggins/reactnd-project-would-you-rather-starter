import React from "react";
import { connect } from "react-redux";

import { saveQuestion } from "../actions";

class Leaderboard extends React.Component {
  render() {
    const { leaderboard } = this.props;

    return (
      <div>
        <p>Leaderboard</p>
        <ul>
          {
            leaderboard.map((leaderboardItem) => (
              <li key={leaderboardItem.id}>
                <div>
                  <p>{leaderboardItem.name}</p>
                  <p><img className="avatar" src={leaderboardItem.avatarURL}/></p>
                  <p>{leaderboardItem.answerCount}</p>
                  <p>{leaderboardItem.questionCount}</p>
                  <p>{leaderboardItem.score}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

function leaderboardItem(user) {
  const { id, name, avatarURL } = user;
  const answerCount = Object.keys(user.answers).length;
  const questionCount = Object.keys(user.questions).length;
  const score = (answerCount + questionCount);

  return {
    id,
    name,
    avatarURL,
    answerCount,
    questionCount,
    score
  };
}

function generateLeaderboard(users) {
  return Object.values(users).map(leaderboardItem).sort((a, b) => b.sortOrder - a.sortOrder);
}

function mapStateToProps({ loggedInUser, users }) {
  return {
    loggedInUser,
    leaderboard: generateLeaderboard(users)
  };
}

export default connect(mapStateToProps)(Leaderboard);
