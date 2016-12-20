# A More Complicated Example

This example is a simple to-do app that allows you to store multiple items, mark them as completed and set a filter to show only incomplete items.

Things to note:

* Actions split out into their own file.
* Rather than relying on strings for our action names we define constants. Good practice for many reasons e.g. we can import the action names where needed.
* The reducer has been split into multiple functions in one file.
* Each function handles the actions it cares about and as before returns new state. `items()` is an array so a bit more complicated than just a number in the first example, need to use spread operator and `Object.assign()` to return new values, not mutate the old ones.
* The main reducer returns a map that maps properties of the state to those functions, so they only deal with their own part of the state tree.
* The reducer sets the default `completed` state, rather than the action.
* The visibility filter only sets a value, it doesn't touch the state of the items - it's up to the render function to decide how to display values based on the current state, in this case hiding completed items if the filter has a specific value.
* In the main store we can pass in the initial items, which could have been generated on the server.
* We have tests! But not of the view :(

ES6 features:

* Using spread operator `...` to clone an array. It's fine to return the original item objects inside as their state has not been changed.
* Using `Object.assign()` to shallow clone an item when completed.
