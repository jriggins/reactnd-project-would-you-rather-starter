import React from 'react';
import Login from './components/Login';
import { connect } from 'react-redux';
import { loadInitialData } from './actions';

export class App extends React.Component {
  state = {
    users: {}
  };

  componentDidMount() {
    this.props.dispatch(loadInitialData());
  }

  onLogin = (userId) => {
    this.setState({ loggedInUserId: userId });
  };

  render() {
    return (
      <div className="App">
        <Login onLogin={this.onLogin}/>
        <p>Logged In: {this.state.loggedInUserId}</p>
      </div>
    );
  };
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(App);
