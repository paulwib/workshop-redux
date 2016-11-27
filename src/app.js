// Using object destructuring to assign exported properties
const { createStore, actions } = require('./store');
const render = require('./render');

// Create the store
const store = createStore();

// Call render whenever state is changed
store.subscribe(() => {
  let view = render(store.getState());
  console.log(view);
});

// Using action creators abstracts away boilerplate
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.increment());
store.dispatch(actions.double());
