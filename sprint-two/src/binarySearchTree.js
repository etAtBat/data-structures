var BinarySearchTree = function(value) {
  var newTree = Object.create(bstMethods);
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;

  return newTree;
};

var bstMethods = {};

bstMethods.insert = function(value){
  var newBSTree = BinarySearchTree(value);
  var rootValue = this.value;

  if(value < rootValue) {
    this.left === undefined ? this.left = newBSTree : this.left.insert(value);
  } else {
    this.right === undefined ? this.right = newBSTree : this.right.insert(value);
  }
};

bstMethods.contains = function(value){
  var current = this.value;
  if(current === value) {
    return true;
  }

  return value < current ? this.left !== undefined && this.left.contains(value) : 
                          this.right !== undefined && this.right.contains(value);
};

bstMethods.depthFirstLog = function(callback){
  callback(this.value);

  if(this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }
  if(this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }

  return;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
