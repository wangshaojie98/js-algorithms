/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.cache = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  if (!this.cache[word.length]) {
    this.cache[word.length] = [word]
    return;
  }

  this.cache[word.length].push(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let param = new RegExp('^'+word+'$');
  const len = word.length;

  return this.cache[len] ? this.cache[len].some(v => param.test(v)) : false
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")) // return False
console.log(wordDictionary.search("bad")) // return False
console.log(wordDictionary.search(".ad")) // return False
console.log(wordDictionary.search("b..")) // return False
console.log(wordDictionary.search("pad")) // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b..");
// @lc code=end

