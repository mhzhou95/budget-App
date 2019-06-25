import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({dispatch, id , description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>   <h3>{description}</h3></Link>
    <p>{amount}</p>
    <p>{createdAt}</p>
    <p>{id}</p>
  </div>
);

export default connect()(ExpenseListItem);

