import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadInitialData } from './actions/initial';

import AddQuestion from './components/AddQuestion';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import PollDetails from './components/PollDetails';
import Profile from './components/Profile';

export class App extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { loggedInUserId } = this.props;

    return (
      <div id="main">
        {loggedInUserId === null ? (
          <Login />
        ) : (
          <div>
            <Navigation />
            <Profile />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/questions/:questionId" component={PollDetails} />
              <Route exact path="/add" component={AddQuestion} />
              <Route exact path="/leaderboard" component={Leaderboard} />
              <Route component={NotFound} />
            </Switch>
          </div>
        )}

        {/* prettier-ignore */}
        <div id="footer">
          <div>Avatar icons made by <a href="https://www.freepik.com/?__hstc=57440181.7e9bb6a94f3fc1e2093442e33aeffd94.1561387357605.1561387357605.1561387357605.1&__hssc=57440181.7.1561387357606&__hsfp=752279542" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUserId }) {
  return {
    loggedInUserId
  };
}

const mapDispatchToProps = {
  loadInitialData
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
