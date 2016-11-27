const test = require('tape');
const { createStore, actions } = require('../src/store');

test('actions.increment() should increase the value of state', assert => {
  assert.plan(1);
  let store = createStore();

  store.dispatch(actions.increment());

  assert.equal(store.getState(), 1);
  assert.end();
});

test('actions.decrement() should decrease the value of state', assert => {
  assert.plan(1);
  let store = createStore();

  store.dispatch(actions.decrement());

  assert.equal(store.getState(), -1);
  assert.end();
});

test('actions.double() should double the value of state', assert => {
  assert.plan(1);
  let store = createStore(4);

  store.dispatch(actions.double());

  assert.equal(store.getState(), 8);
  assert.end();
});
