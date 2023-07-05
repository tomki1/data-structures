let Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.backIndex = 0;
  this.frontIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.backIndex] = value;
  this.backIndex++;
};

Queue.prototype.dequeue = function() {
  var removedString = this.storage[this.frontIndex];
  delete this.storage[this.frontIndex];
  this.frontIndex++;

  return removedString;
};

Queue.prototype.size = function() {
  if (this.backIndex - this.frontIndex < 0) {
    return 0;
  }

  return this.backIndex - this.frontIndex;
};

var line = new Queue();
line.enqueue('a');
line.enqueue('b');
line.enqueue('c');
