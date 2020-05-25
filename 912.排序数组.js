/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  let len = nums.length
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
      }
    }
  }
  return nums
};
// @lc code=end

