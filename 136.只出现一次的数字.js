/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort()
  let left = 0, right = 1
  while (left < nums.length) {
    if (nums[left] === nums[right]) {
      right += 2
      left += 2
    } else {
      return nums[left]
    }
  }

};
// @lc code=end

