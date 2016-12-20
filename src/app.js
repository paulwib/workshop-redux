// Using object destructuring to assign exported properties
const createStore = require('./store');
const render = require('./render');
const { addItem, toggleItem, removeItem, requestItem, setVisibilityFilter, visibilityFilters } = require('./actions');

// Create the store
const store = createStore([ { text: 'Learn ES6', completed: true } ]);

// Call render whenever state is changed
store.subscribe(() => {
  let view = render(store.getState());
  console.log(view);
});

// Demo the effect of some actions
store.dispatch(addItem('Learn redux'));
store.dispatch(addItem('Learn react'));
store.dispatch(toggleItem(1));
store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_INCOMPLETE));
store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_ALL));
store.dispatch(removeItem(1));
store.dispatch(requestItem(store));
