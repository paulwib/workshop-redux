const redux = require('redux');

// Store is created with reducer and inital state
const createStore = (initialValue = 0) => redux.createStore(counter, initialValue);

// Reducer is passed state and action and returns the new state
function counter (state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'DOUBLE':
      return state * 2;
    default:
      return state;
  }
}

// Action creators are functions that return actions
function increment () {
  return { type: 'INCREMENT' };
}

function decrement () {
  return { type: 'DECREMENT' };
}

function double () {
  return { type: 'DOUBLE' };
}

// Export store and it's related actions - using object literal property assignment
module.exports = {
  createStore,
  actions: { increment, decrement, double }
};
