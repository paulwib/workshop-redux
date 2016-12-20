/* jshint -W138 */

// Import constants from actions
const { ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM, SET_VISIBILITY_FILTER, visibilityFilters } = require('./actions');

// `state` is just the items
function items (state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [ ...state, { text: action.payload, completed: false } ];
    case TOGGLE_ITEM:
      return state.map((item, index) => {
        return index !== action.payload ? item : Object.assign({}, item, { completed: !item.completed });
      });
    case REMOVE_ITEM:
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
}

// `state` is just the visibility filter
function visibilityFilter (state = visibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}

// Export a reducer function that maps state properties to above functions
module.exports = function (state, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    items: items(state.items, action)
  };
};
