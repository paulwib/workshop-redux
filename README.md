# Async Actions - A Naive Approach

There are a number of ways to handles async actions, such as loading data from a server. Here's an example of how *not* to do it.

In this example the `requestItem` action will start the call to the server, then immediately return a `REQUEST_ITEM` action to indicate the action is initiated. Then when the async call is complete it dispatches a `RECEIVE_ITEM` action directly on the store to say the item has been received, which it then appends to a new item list.

Issues with this:

* The current store must be passed to the action.
* The thing calling the action has no way of knowing when the action is completed.
* This makes testing problematic, as have to set a timeout to wait for the action to complete.

Anything else?
