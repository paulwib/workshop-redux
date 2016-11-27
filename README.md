# Introduction

We're going on little tour of redux! In this workshop we'll cover the following topics:

1. A Minimal Example - Store, Actions, Reducers and Rendering
2. Using Action Creators
3. Exercise: Add a Parameterized Action Creator
4. A Slightly More Complicated Example - Multiple Reducers (yes, it will be a todo app)
5. Exercise: Add Visibility Filter Action
6. Reducing Boilerplate Part 1 - `combineReducers()`
7. Exercise: Set Initial State
8. Async Actions - A Naive Approach
9. Async Actions - What the Thunk?
10. Exercise: Add an Async Action and Store `isLoading` State
11. Using Promise Middleware for Async Actions Part 1 - `redux-promise-middleware`
12. Exercise: Handling Rejected Promises
13. Reducing Boilerplate Part 2 - `redux-actions`
14. Exercise: Use `createActions` and `handleActions`
15. Using Promise Middleware for Async Actions Part 2 - `redux-promise`
16. Exercise: What Happened to Progress? Fix `isLoading` State
17. Chaining Async Actions
18. Testing
19. Exercise: Organise Files Nicely
20. Wrap Up

## Before We Start

You'll need:

* A working computer with git and Node.js 6.x installed.
* A working knowledge of JavaScript ES6 - we will be using ES6 features supported in Node.js, but no babel so no `import` statements or `default` exports.
* A fork of this repo's master (please don't skip ahead on branches).

Note we won't be using `react-redux` or running anything in a browser for this workshop, this is purely about understanding how redux works and it's common patterns.
