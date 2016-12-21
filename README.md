# Introduction

We're going on little tour of redux! In this workshop we'll cover the following topics:

1. A Minimal Example - Store, Actions, Reducers and Rendering
2. Using Action Creators
3. Exercise: Add a Parameterized Action Creator
4. A More Complicated Example - Constants, Split Reducers and Pure State Updates (yes, it will be a todo app)
5. Exercise: Add Feature to Remove Items
6. Reducing Boilerplate Part 1 - `combineReducers()`
7. Async Actions - A Naive Approach
8. Async Actions - What the Thunk?
9. Exercise: Add an Async Action and Store `isLoading` State
10. Using Promise Middleware for Async Actions Part 1 - `redux-promise-middleware`
11. Using Promise Middleware for Async Actions Part 2 - Combining `redux-thunk` and `redux-promise-middleware`
12. Exercise: Handling Rejected Promises
13. Reducing Boilerplate Part 2 - `redux-actions`
14. Exercise: Use `createActions` and `handleActions`
15. Using Promise Middleware for Async Actions Part 3 - `redux-promise`
16. Exercise: What Happened to Progress? Fix `isLoading` State
17. Chaining Async Actions
18. Wrap Up

## Before We Start

You'll need:

* A working computer with git and Node.js 6.x installed.
* A working knowledge of JavaScript ES6 - we will be using ES6 features supported in Node.js, but no babel so no `import` statements or `default` exports.
* A fork of this repo's master (please don't skip ahead on branches) - create a branch called `workshop` rather than working on master.

Note we won't be using `react-redux` or running anything in a browser for this workshop, this is purely about understanding how redux works.
