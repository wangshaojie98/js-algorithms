/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // 1.去除空格
  s = s.trim();

  // max, min
  const max = Math.pow(2, 31) - 1;
  const min = -max - 1;

  // 2.列出正则表达式
  const reg = /\s*([+|-]?[0-9]*).*/

  // 3.拿到匹配结果
  const group = s.match(reg);

  let res = null;
  if (group) {
    // 可能匹配 + + | + -
    res = +group[1];
    if (isNaN(res)) {
      return 0
    }
  }

  if (res > max) {
    return max;
  }

  if (res < min) {
    return min;
  }

  return res;
};
// @lc code=end

// parseInt(x, 10)
// /\s/匹配空格
// /^\s?(+|-)?/