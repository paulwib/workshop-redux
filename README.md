# Reducing Boilerplate Part 2 - `redux-actions`

The `redux-actions` library is a set of utilities for creating action creators and handlers. It uses the conventions of Flux Standard Actions (FSA).

At it's simplest it you can do:

```
const foo = createAction('FOO');
foo(10)
```

This will dispatch an action like `{ action: 'FOO', payload: 10 }`.

