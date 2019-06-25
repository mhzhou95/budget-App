import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => (
  <div>
    <h3>{props.description}</h3>
    <p>{props.amount}</p>
    <p>{props.createdAt}</p>
    <p>{props.id}</p>
    <button onClick={() => {console.log(props.dispatch())}}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);

