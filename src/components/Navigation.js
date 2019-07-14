import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div id="add-question-link">
      <Link to="/">Home</Link>
      <Link to="/add">Add Question</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
}

export default Navigation;
