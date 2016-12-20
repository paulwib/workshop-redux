const redux = require('redux');
const reducer = require('./reducers');

module.exports = function (initialItems) {
	return redux.createStore(reducer, { items: initialItems });
};
