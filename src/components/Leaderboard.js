import React from 'react';
import { connect } from 'react-redux';

class Leaderboard extends React.Component {
  render() {
    const { leaderboard } = this.props;

    return (
      <div>
        <p>Leaderboard</p>
        <ul>
          {leaderboard.map((leaderboardItem) => (
            <li key={leaderboardItem.id}>
              <div>
                <p>{leaderboardItem.name}</p>
                <p>
                  <img alt={`${leaderboardItem.name}'s Avatar`} className="avatar" src={leaderboardItem.avatarURL} />
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
}

function mapStateToProps({ loggedInUser, leaderboard }) {
  const sortByScoreDescending = (leaderboardItemA, leaderboardItemB) => leaderboardItemB.score - leaderboardItemA.score;

  return {
    loggedInUser,
    leaderboard: Object.values(leaderboard).sort(sortByScoreDescending)
  };
}

export default connect(mapStateToProps)(Leaderboard);
