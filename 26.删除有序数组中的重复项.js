/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] === nums[i]) {
        nums.splice(i, 1)
        i--
        length--
        break
      }
    }
  }
  return nums.length
};
// @lc code=end

