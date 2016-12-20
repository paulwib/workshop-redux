# Reducing Boilerplate Part 1 - `combineReducers()`

That reducer map follows a pattern - the object key, function name and state property all have the same name, surely there is a way to simplify this!

Fortunately redux provides `combineReducers` for just this purpose. Just pass it an object of keys mapped to functions and it will work out that it should be called with just part of the state.

If the function name doesn't match the key you can still use the standard `key: function` syntax.

Note this is the first time we had to require `redux` to get at it's utilities, previously it was just vanilla JS.
