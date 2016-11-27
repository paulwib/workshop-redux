# Exercise: Parameterized Action Creators

Checkout the exercise branch on your computer and install dependencies:

```
$ git checkout 03-exercise_action-creators
$ npm install
```

A new feature request has come in - users want to be able to multiply numbers by any factor.

Being a good TDD developer the test has already been created, but it fails. To run the tests:

```
$ node test/store.js
```

Add an action and corresponding handler to the reducer to make the new unit tests pass.

When you're done commit and push your changes.

Hint: Actions can carry more than just a `type` value.
