/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {}

  for (var i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (map[temp] !== undefined) {
      return [map[temp], i]
    }

    if (!map[nums[i]]) {
      map[nums[i]] = i
    }
  }
};
// @lc code=end
