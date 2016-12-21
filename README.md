# Exercise - Handling Rejected Promises

Checkout the exercise branch on your computer and install dependencies:

```
$ git checkout 11-exercise_rejected-promises
$ npm install
```

Your colleague is handling promises with a combination of thunk and promise middleware. They've written a test that simulates the API returning an error. It looks like they're catching the error but they're still getting warnings about `UnhandledPromiseRejectionWarning` when they run the tests:

```
$ node test/store.js
```

Why are they getting these warnings? Can you fix it without resorting to turning off these warnings or adding a global rejection handler or modifying the tests?

When you're done commit and push your changes.
