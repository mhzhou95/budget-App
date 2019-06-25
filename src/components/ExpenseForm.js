import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const date = moment();

console.log(date.format('MMMM Do YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description  : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense? moment(props.expense.CreatedAt) : moment(),
      calenderFocused: false,
      error: ''
    }

    }
  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState( ()=> ({description}) );
  };
  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState ( ()=> ({
      note
    }))
  }
  onAmountChange = (event) => {
    const amount = event.target.value;
  if ( ! amount  || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(()=> ({amount}));
    }
  }
  onDateChange = (createdAt) => {
    if(createdAt){
    this.setState(() => ({createdAt}))
    }
  }
  onFocusChange = ({focused}) => {
    this.setState(()=> ({ calenderFocused: focused}))
  }
  onSubmit = (event) =>{
    event.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(()=>({
        error: 'Either Description or Amount is empty'
      }))
    }else{
      this.setState(()=>({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render () {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.onSubmit}>
          <input 
            type="text" 
            placeholder="description"
            autoFocus
            value = {this.state.description}
            onChange= {this.onDescriptionChange}
            />
          <input 
            type="text"
            placeholder="amount"
            value = {this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date = {this.state.createdAt}
            onDateChange = {this.onDateChange}
            focused = {this.state.calenderFocused}
            onFocusChange = {this.onFocusChange}
            numberOfMonths = {1}
            isOutsideRange ={() => false}
          />
          <textarea
            placeholder="add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}