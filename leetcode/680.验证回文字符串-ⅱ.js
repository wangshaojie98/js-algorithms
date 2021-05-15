/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const len = s.length;
  function isPalindrome(l, r) {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false
      }
      l++;
      r--;
    }

    return true
  }

  let i = 0, j = len - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
      continue;
    }

    if (isPalindrome(i, j - 1)) {
      return true;
    }

    if (isPalindrome(i + 1, j)) {                
      return true;
    }
  
    return false;
  }

  return true;
};
console.log(validPalindrome("abcdca"))
// @lc code=end

