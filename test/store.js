// Utilities
const test = require('tape');

// Subject
const createStore = require('../src/store');
const { addItem, toggleItem, removeItem, setVisibilityFilter, visibilityFilters } = require('../src/actions');

test('Init store() should allow initial items', assert => {
  assert.plan(1);

  let testStore = createStore([ { text: 'foo', completed: false } ]);

  assert.deepEqual(testStore.getState().items, [ { text: 'foo', completed: false } ]);
  assert.end();
});

test('Action addItem() should add a new item', assert => {
  assert.plan(1);
  let testStore = createStore();

  testStore.dispatch(addItem('foo'));

  assert.deepEqual(testStore.getState().items, [ { text: 'foo', completed: false } ]);
  assert.end();
});

test('Action toggleItem() should mark item completed', assert => {
  assert.plan(4);
  let testStore = createStore([
    { text: 'foo', completed: false },
    { text: 'bar', completed: false },
    { text: 'qux', completed: true },
    { text: 'quux', completed: true }
  ]);

  testStore.dispatch(toggleItem(1));
  testStore.dispatch(toggleItem(2));

  assert.equal(testStore.getState().items[0].completed, false); // not toggled
  assert.equal(testStore.getState().items[1].completed, true);  // toggled
  assert.equal(testStore.getState().items[2].completed, false); // toggled
  assert.equal(testStore.getState().items[3].completed, true);  // not toggled
  assert.end();
});

test('Action setVisibilityFilter() should set the visibility filter', assert => {
  assert.plan(1);
  let testStore = createStore();

  testStore.dispatch(setVisibilityFilter(visibilityFilters.SHOW_ALL));

  assert.equal(testStore.getState().visibilityFilter, visibilityFilters.SHOW_ALL);
  assert.end();
});

test('Action removeItem(index) should remove an item', assert => {
  assert.plan(1);
  let testStore = createStore();

  testStore.dispatch(addItem('foo'));
  testStore.dispatch(addItem('bar'));
  testStore.dispatch(addItem('fred'));
  testStore.dispatch(removeItem(1));

  assert.deepEqual(testStore.getState().items, [
    { text: 'foo', completed: false },
    { text: 'fred', completed: false },
  ]);
  assert.end();
});

