import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ( { isAuthenticated, component: Component, ...restOfProps }) => (
  <Route {...restOfProps} component = { ( props ) => (
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div> 
          <Component {...props} /> 
        </div>
      )
    )}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
}) 

export default connect(mapStateToProps)(PublicRoute);