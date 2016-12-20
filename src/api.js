// Async API
var callCount = 0;
var itemsDb = [ { text: 'from server 1', completed: false }, { text: 'from server 2', completed: true } ];

module.exports = function loadItem () {
  var item = itemsDb.shift();
  var timeout = 1000 / ++callCount;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return item ? resolve(item) : reject(new Error('Run out of items'));
    }, timeout);
  });
};

