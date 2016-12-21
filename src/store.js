const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const promiseMiddleware = require('redux-promise-middleware').default;
const reducer = require('./reducers');

module.exports = function (initialItems) {
	return redux.createStore(reducer, { items: initialItems }, redux.applyMiddleware(thunkMiddleware, promiseMiddleware()));
};
