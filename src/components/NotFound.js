import React from 'react';

const DEFAULT_MESSAGE = 'Could not find the path that you were looking for. Sorry!';

function NotFound({ message = DEFAULT_MESSAGE }) {
  return (
    <div>
      <h1>404: {message}</h1>
    </div>
  );
}

export default NotFound;
