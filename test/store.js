// Utilities
const test = require('tape');
const td = require('testdouble');

// Use testdouble to stub the async API - note this won't work with 3rd-party dependencies
const loadItem = td.replace('../src/api');
td.when(loadItem()).thenResolve([{ text: 'from server 1', completed: false }]);

// Subject
const createStore = require('../src/store');
const {
  addItem,
  toggleItem,
  removeItem,
  requestItem,
  setVisibilityFilter,
  visibilityFilters
} = require('../src/actions');

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
    { text: 'fred', completed: false }
  ]);
  assert.end();
});

test('Action requestItems() loads more items asynchronously', assert => {
  assert.plan(1);
  let testStore = createStore();

  testStore.dispatch(requestItem())

  .then(() => {
    assert.deepEqual(testStore.getState().items, [
      { text: 'from server 1', completed: false }
    ]);
    assert.end();
  });
});

test('An isLoading flag is set while items are fetched from the server', assert => {
  assert.plan(2);
  let testStore = createStore();

  let promise = testStore.dispatch(requestItem());

  assert.equal(true, testStore.getState().isLoading);
  promise.then(() => {
    assert.equal(false, testStore.getState().isLoading);
    assert.end();
  });
});

test.only('Action requestItem() failing should leave existing items intact', assert => {
  td.when(loadItem(), { times: 1 }).thenReject();
  assert.plan(3);
  let testStore = createStore([ { text: 'foo', completed: false } ]);

  let promise = testStore.dispatch(requestItem());

  assert.equal(true, testStore.getState().isLoading);
  promise.catch(() => {
    assert.equal(false, testStore.getState().isLoading);
    assert.deepEqual(testStore.getState().items, [ { text: 'foo', completed: false } ]);
    assert.end();
  });
});
