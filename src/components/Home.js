import React from 'react';
import { connect } from 'react-redux';

import Polls from './Polls';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Home</p>
        <Polls />
      </div>
    );
  }
}

export default connect()(Home);
