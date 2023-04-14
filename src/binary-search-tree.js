const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.curent = null;
  }

  root() {
    return this.curent;
  }

  add(data) {
    this.curent = addData(this.curent, data);

    function addData(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data, find = false) {
    return hasData(this.curent, data, find);

    function hasData(node, data, find) {
      if (find) {
        if (!node) return null;
        if (data === node.data) return node;
      } else {
        if (!node) return false;
        if (data === node.data) return true;
      }

      if (data < node.data) {
        return hasData(node.left, data, find);
      } else {
        return hasData(node.right, data, find);
      }
    }
  }

  find(data) {
    return this.has(data, true);
  }

  remove(data) {
    this.curent = removeData(this.curent, data);

    function removeData(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node = node.right;
        if (!node.right) return node = node.left;
        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removeData(node.left, maxLeft.data);
        return node;
      }
    }
  }

  min() {
    if (!this.curent) return null;
    let minLeft = this.curent;
    while (minLeft.left) {
      minLeft = minLeft.left;
    }
    return minLeft.data;
  }

  max() {
    if (!this.curent) return null;
    let maxRight = this.curent;
    while (maxRight.right) {
      maxRight = maxRight.right;
    }
    return maxRight.data;
  }
}

module.exports = {
  BinarySearchTree
};