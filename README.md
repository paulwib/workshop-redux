# Action Creators

Manually typing out actions will quickly get dull. An action creator is a function that returns an action. Nothing magical.

Here we've also broken our app into `store` and `view` files. That allows us to add unit tests of our store. For now we'll leave our new action creators in the same file as the store.

We'll be using the `tape` library for testing and assertions. We'll use the plan-act-assert convention for our tests.

We've also introduced a few ES6 features worth mentioning:

* Object destructuring with `require`
* Fat arrow syntax for anonymous functions
* Default function arguments
* Object literal property shorthand

Question: Why did we export a `createStore` method rather than just the store itself? Didn't we say there could be only one?

Answer: This is partly to allow us to pass an initial value, but more importantly it allows us to write unit tests. If we just exported an instance of `store` our unit tests would clobber each other as they won't know the initial state of the store. There is (rightly) no way to reset a store.

