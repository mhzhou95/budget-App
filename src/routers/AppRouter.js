import React from 'react';
import {Router, Route , Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import BudgetDashboardPage from '../components/BudgetDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history = {history} >
    <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true}/>
          <PrivateRoute path="/dashboard" component={BudgetDashboardPage} />
          <PrivateRoute path="/create" component={AddExpensePage}/>
          <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
          <Route component = {NotFoundPage}/>
        </Switch>
    </div>
  </Router>
);

export default AppRouter;