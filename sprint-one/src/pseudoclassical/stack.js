let Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

Stack.prototype.pop = function() {
  var removedString = this.storage[this.top - 1];
  delete this.storage[this.top - 1];
  this.top--;

  return removedString;
};

Stack.prototype.size = function() {
  if (this.top < 0) {
    return 0;
  }

  return this.top;
};

var browserHistory = new Stack();
browserHistory.push('www.Google.com');
browserHistory.push('www.Galvanize.com');
browserHistory.push('www.Youtube.com');
browserHistory.pop();
browserHistory.size();