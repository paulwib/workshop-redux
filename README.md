# Exercise: Add an Async Action and Store `isLoading` State

Checkout the exercise branch on your computer and install dependencies:

```
$ git checkout 09-exercise_async-loading-state
$ npm install
```

A new feature request has come in - we want to keep track of loading state when we're fetching items from the server.

Being a good TDD developer the test has already been created, but it fails. To run the tests:

```
$ node test/store.js
```

Without adding any more middlewares, add an `isLoading` flag to the state while an async action is in progress.

When you're done commit and push your changes.

Hint: We haven't done anything with the `REQUEST_ITEM` action yet.
