var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.backIndex = 0;
  someInstance.frontIndex = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.backIndex] = value;
  this.backIndex++;
};

queueMethods.dequeue = function() {
  var removedString = this.storage[this.frontIndex];
  this.frontIndex++;
  return removedString;
};

queueMethods.size = function() {
  if (this.backIndex - this.frontIndex < 0) {
    return 0;
  }
  return this.backIndex - this.frontIndex;
};

