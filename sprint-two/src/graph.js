// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};



// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] === node) {
        // remove edge
        // loop through edge array
        for (var j = 0; j < this.edges.length; j++) {
          var currentEdge = this.edges[j];
          if (this.nodes[i] === currentEdge[0] || currentEdge[1]) {
            this.removeEdge(currentEdge[0], currentEdge[1]);
          }
        }

        // remove node
        this.nodes.splice(i,1);
        return;
      }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    var currentEdge = this.edges[i];
    if ((currentEdge[0] === fromNode && currentEdge[1] === toNode) || (currentEdge[0] === toNode && currentEdge[1] === fromNode)) {
      return true;
    }

  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var newEdge = [fromNode, toNode];
  this.edges.push(newEdge);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.edges.length; i++) {
    var currentEdge = this.edges[i];
    if ((currentEdge[0] === fromNode && currentEdge[1] === toNode) || (currentEdge[0] === toNode && currentEdge[1] === fromNode)) {
      this.edges.splice(i, 1);

    }
   }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */



