/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //双指针方法
  let left = 0, right = 1;
  while (right < nums.length || nums[right] != null) {
    if (nums[left] !== nums[right] || nums[left - 1] !== nums[right]) {
      left++
    } else {
      right++
      if (right !== nums.length) {
        nums[left + 1] = nums[right]
      }
    }
  }
  return left + 1
};
// @lc code=end

