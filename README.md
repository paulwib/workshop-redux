# A Minimal Example - Store, Actions, Reducers and Rendering

* Store - there should be only one, and has 3 methods `subscribe`, `dispatch` and `getState`.

* Actions - things that can happen, just plain objects, triggered by calling `dispatch`.

* Reducers - take the current state and action and return a new state - pure functions, no side-effects, triggered for every action.

* Rendering - View is a function of state i.e. `render(state) === view`. In this example we just return the state as it's only a number. Linked to changes in state via `subscribe()`. In the real world there are more elaborate ways to connect views to state changes e.g. `react-redux`.

Question: What will running the app output?
