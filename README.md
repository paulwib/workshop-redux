# Async Actions - What the Thunk?

A more idiomatic way to handle async actions is to use the `redux-thunk` middleware. A middleware is a thing that is applied to the store and which will then be wrapped around every action that is dispatched on the store. A thunk is roughly a function that returns another function.

The `redux-thunk` middleware allows your actions to return functions rather than plain objects. In this case we return a function that dispatches an initial action then calls the async method and when complete dispatching the next action. This is similar to before but has a couple of important advantages:

* There is no need to pass the store around, the thunk passes the store's `dispatch` function to the thunked function.
* The inner function can return a promise that the action invoker can chain a `then()` against.
* The `getState()` function is also passed as the second argument if you needed to interrogate the current state, for example to check if a request was already in flight.
