import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, loggedInUser = {}, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedInUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
}
