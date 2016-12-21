# Using Promise Middleware for Async Actions Part 1 - `redux-promise-middleware`

There are middlewares specifically designed to handle actions that use promises. The first one we'll try is `redux-promise-middleware`.

This allows defining an action with a promise payload. It will take the action name e.g. `REQUEST_ITEM` and will dispatch 3 actions related to the promise:

* `REQUEST_ITEM_PENDING` when the request starts
* `REQUEST_ITEM_FULFILLED` when it completes successfully
* `REQUEST_ITEM_REJECTED` if the promise rejects

These are the actions your reducer then has to handle. No action called `REQUEST_ITEM` will ever be fulfilled.

Note we use a template string to concatenate the expected suffixes to the core action name.

It will still only return the plain action object, so if the action wants to `then()` on the promise it will need to take the action and do `action.payload.then(..)`. Or alternatively you can use it in combination with `redux-thunk` to dispatch the action and then return the promise.
