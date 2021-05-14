/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        const leftValue = nums[left];
        while (left < right && leftValue === nums[left]) {
          left++
        }

        const rightValue = nums[right];
        while (left < right && rightValue === nums[right]) {
          right--
        }
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }

    // 去重固定位
    while (i <= len && nums[i] === nums[i+1]) {
      i++
    }
  }

  return res
};
// @lc code=end

