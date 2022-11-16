/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export const checkExpToken = _token => {
  if (_token) {
    const date = new Date().getTime() / 1000;
    const expToken = jwt_decode(_token).exp;
    if (expToken > date) {
      return true;
    }
    return false;
  }
  return false;
};
const checkRememberLogin = () => {
  return (
    localStorage.getItem('expiry-remember-me-crm') &&
    new Date().getTime() < localStorage.getItem('expiry-remember-me-crm')
  );
};

const ProtectedRoute = ({ path, component: Component }) => {
  return (
    <Route
      path={path}
      render={props => {
        if (!checkRememberLogin() || !checkExpToken(localStorage.getItem('refreshToken-crm'))) {
          return (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default withRouter(ProtectedRoute);
