const redux = require('redux');

// Store is created with reducer and initial state
const store = redux.createStore(counter, 0);

// Reducer is passed current state and action and returns the new state
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

// View is a function of state - in this case `state` is just a number so not much to do
function render (state) {
  return state;
}

// Call render whenever state is changed
store.subscribe(function () {
  let view = render(store.getState());
  console.log(view);
});

// Actions are just plain objects - by convention they have at least a `type` value
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DOUBLE' });


