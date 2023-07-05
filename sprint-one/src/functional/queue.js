var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var frontIndex = 0;
  var backIndex = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[backIndex] = value;
    backIndex++;
  };

  someInstance.dequeue = function() {
    var removedString = storage[frontIndex];
    delete storage[frontIndex];
    frontIndex++;
    return removedString;
  };

  someInstance.size = function() {
    if (backIndex - frontIndex < 0) {
      return 0;
    }
    return backIndex - frontIndex;
  };

  return someInstance;
};
