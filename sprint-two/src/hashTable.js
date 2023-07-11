var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
 var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];


  if (this._storage[index] === undefined) {
    this._storage[index] = [];
    this._storage[index].push(tuple);
  } else {

    for (var i = 0; i < this._storage[index].length; i++) {
      if (k === this._storage[index][i][0]) {
        this._storage[index][i][1] = v;
      } else {
        this._storage[index].push(tuple);
      }
    }


  }



};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (k === this._storage[index][i][0]) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (k === this._storage[index][i][0]) {
      this._storage[index][i].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


