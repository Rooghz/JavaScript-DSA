class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  search(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) return false;
      node = node[c];
    }
    return node.isWord === true;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let c of prefix) {
      if (!node[c]) return false;
      node = node[c];
    }
    return true;
  }
}