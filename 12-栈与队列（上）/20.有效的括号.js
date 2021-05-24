/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const map = {'(': ')', '[': ']', '{': '}'}
  let i = 0;
  while (i < s.length) {
    if (map[s[i]]) {
      stack.push(s[i])
      i++;
    } else {
      let top = stack.pop()
      if (s[i] === map[top]) {
        i++;
        continue
      } else {
        return false
      }
    }
  }

  return stack.length === 0 ? true :  false
};
// @lc code=end
