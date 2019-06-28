import moment from 'moment';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 200,
  createdAt: 0
}, {
  id: '2',
  description: 'Ball',
  note: '',
  amount: 500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '1',
  description: 'Chips',
  note: '',
  amount: 600,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

const getExpensesTotal = (expenses) => {
  return expenses.map((expense) => expense.amount).reduce((sum, value) => sum + value, 0);
};

export default getExpensesTotal;

