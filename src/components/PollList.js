import React from 'react';
import { Link } from 'react-router-dom';

function PollList({ polls }) {
  return (
    <div>
      {polls.map((question) => (
        <div className="Poll" key={question.id}>
          <p>{question.author}</p>
          <p>{question.timestamp}</p>
          <p>{question.optionOne.text}</p>
          <p>{question.optionTwo.text}</p>
          <p>
            <Link to={`/questions/${question.id}`}>View Details</Link>
          </p>
        </div>
      ))}
    </div>
  );
}

export default PollList;
