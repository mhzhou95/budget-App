import React from 'react';
import {BrowserRouter, Route , Switch, Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header>
    <h1>Budget Calculator</h1>
    <NavLink to="/dashboard" activeClassName="is-active" >Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">AddExpenses</NavLink>
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

export const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);