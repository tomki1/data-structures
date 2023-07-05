var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[top] = value;
    top++;
  };

  someInstance.pop = function() {
    var removedString = storage[top - 1];
    delete storage[top - 1];
    top--;
    return removedString;
  };

  someInstance.size = function() {
    if (top < 0) {
      return 0;
    }
    return top;
  };

  return someInstance;
};
