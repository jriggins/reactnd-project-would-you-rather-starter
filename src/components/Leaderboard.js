import React from 'react';
import { connect } from 'react-redux';
import Avatar from './avatar';

function Leaderboard({ leaderboard }) {
  return (
    <div>
      <p>Leaderboard</p>
      <ul>
        {leaderboard.map((leaderboardItem) => (
          <li key={leaderboardItem.id}>
            <div>
              <p>{leaderboardItem.name}</p>
              <p>
                <Avatar name={leaderboardItem.name} url={leaderboardItem.avatarURL} />
              </p>
              <p>{leaderboardItem.answerCount}</p>
              <p>{leaderboardItem.questionCount}</p>
              <p>{leaderboardItem.score}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ users = {} }) {
  const byScoreDescending = (leaderboardItemA, leaderboardItemB) => leaderboardItemB.score - leaderboardItemA.score;

  const userToLeaderboard = (user) => {
    const { id, name, avatarURL, answers, questions } = user;
    const answerCount = Object.keys(answers).length;
    const questionCount = Object.keys(questions).length;
    const score = answerCount + questionCount;

    return {
      id,
      name,
      avatarURL,
      answerCount,
      questionCount,
      score
    };
  };

  return {
    leaderboard: Object.values(users)
      .map(userToLeaderboard)
      .sort(byScoreDescending)
  };
}

export default connect(mapStateToProps)(Leaderboard);
