class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.backIndex = 0;
    this.frontIndex = 0;
  }

  enqueue(value) {
    this.storage[this.backIndex] = value;
    this.backIndex++;
  }

  dequeue() {
    var removedString = this.storage[this.frontIndex];
    delete this.storage[this.frontIndex];
    this.frontIndex++;

    return removedString;
  }

  size() {
    if (this.backIndex - this.frontIndex < 0) {
      return 0;
    }

    return this.backIndex - this.frontIndex;
  }

}

var line = new Queue();
line.enqueue('a');
line.enqueue('b');
