# Reducing Boilerplate Part 2 - `redux-actions`

The `redux-actions` library is a set of utilities for creating action creators and handlers. It uses the conventions of Flux Standard Actions (FSA).

First you can create actions:

```
const foo = createAction('FOO');
foo(10)
```

This will dispatch an action like `{ action: 'FOO', payload: 10 }` i.e. by default the function argument is assigned to the payload of the action.

Then you can handle actions:

```
const reducer = handleAction(foo);
```

The most basic action handler will set the state to whatever the value of `payload` is.
