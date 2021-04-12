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
  //双重循环
  // let length = nums.length
  // for (let i = 0; i < length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[j] === nums[i]) {
  //       nums.splice(i, 1)
  //       i--
  //       length--
  //       break
  //     }
  //   }
  // }
  // return nums.length
  //双指针

  let left = 0, right = 1;
  while (right < nums.length || nums[right] != null) {
    if (nums[left] !== nums[right]) {
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

