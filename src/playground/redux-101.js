import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const setCount = ({count = 66}= {})=>({
  type: 'SET',
  count: count
});

const resetCount = ()=>({
  type: 'RESET',
  count: 0
});

//REducers

const countReducer = ((state ={count:0}, action)=>{
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT': 
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET' :
      return {
        count: 0
      }
    case 'SET' :
      return {
        count : action.count
      }
    default:
    return state;
  }
});

const store = createStore(countReducer);

// Whenever state changes it will do somehting 
// With suscribe()
// the return value of subscribe is actually unsubscribe
// if you call it it will stop watching changes

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});


// Actions = can change the redux store values
// Object that gets sent to the store

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBY: 5
// });
store.dispatch(incrementCount({incrementBy:5}));

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 987}));
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 4
// });

// store.dispatch({
//   type: 'SET',
//   count: 78
// })