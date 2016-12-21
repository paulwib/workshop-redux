const redux = require('redux');
const promiseMiddleware = require('redux-promise-middleware').default;
const reducer = require('./reducers');

module.exports = function (initialItems) {
	return redux.createStore(reducer, { items: initialItems }, redux.applyMiddleware(promiseMiddleware()));
};
