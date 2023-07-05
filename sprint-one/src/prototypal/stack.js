var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.top = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function() {
  var removedString = this.storage[this.top - 1];
  delete this.storage[this.top - 1];
  this.top--;
  return removedString;
};

stackMethods.size = function() {
  if (this.top < 0) {
    return 0;
  }
  return this.top;
};
