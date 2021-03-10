/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let targetNum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return targetNum
    else targetNum++
  }
  return targetNum
};
// @lc code=end

