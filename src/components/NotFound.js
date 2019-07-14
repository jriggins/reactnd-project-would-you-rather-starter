import React from "react";

class NotFound extends React.Component {
  render() {
    const message = this.props.message || "Could not find the path that you were looking for. Sorry!";

    return (
      <div>
        <h1>404: {message}</h1>
      </div>
    );
  }
}

export default NotFound;
