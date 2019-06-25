import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';


store.subscribe(()=> {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount:100, createdAt: -2000}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount:300, createdAt: -1000}));

// console.log(expenseOne);

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [{
    id: 'coolo',
    description: 'june rent',
    note: 'final payment for the lease',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'anount',
    startDate: undefined,
    endDate: undefined
  }
};

