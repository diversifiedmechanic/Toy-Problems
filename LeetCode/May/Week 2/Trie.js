/*
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true

Note:
  You may assume that all inputs are consist of lowercase letters a-z.
  All inputs are guaranteed to be non-empty strings.
*/

/**
 * Initialize your data structure here.
 */
var Trie = function(val) {
  this.val = val || null;
  this.children = [];
};

/*
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

  let node = this;

  // iterate through the word
  for (let i = 0; i < word.length; i++) {
    let foundChild = false;

    // if the current letter exists as a child of the current node
    for (let j = 0; j < node.children.length; j++) {

      if (node.children[j].val === word[i]) {
        // change the node to the child node
        node = node.children[j];
        // change found child to true
        foundChild = true;
        // break this iteration
        break;
        // otherwise
      }
    }
    // if a child was not found
    if (!foundChild) {
      // add a new Trie to the child of the current node
      node.children.push(new Trie(word[i]));
      // switch to the child node
      node = node.children[node.children.length - 1];
    }
  }

  // when done iterating add a '.' as a child of the last node
  node.children.push(new Trie('.'));

  return null;
};

/*
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

  let node = this;

  word = word.concat('.');

  // iterate through the word
  for (let i = 0; i < word.length; i++) {
    let foundChild = false;

    // if the current letter exists as a child of the current node
    for (let j = 0; j < node.children.length; j++) {

      if (node.children[j].val === word[i]) {
        // change the node to the child node
        node = node.children[j];
        // change found child to true
        foundChild = true;
        // break this iteration
        break;
        // otherwise
      }
    }
    // if a child was not found
    if (!foundChild) {
      return false
    }
  }

  return true;
};

/*
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var obj = new Trie();
obj.insert('hello');
obj.insert('hell');
console.log(obj.search('hello' === true));
console.log(obj.search('hell' === true));
console.log(obj.search('hel' === false));
