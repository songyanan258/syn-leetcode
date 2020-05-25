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
var twoSum = function (nums, target) {
  // let i = nums.length

  // while (i > 1) {
  //   let last = nums.pop()
  //   if (nums.indexOf(target - last) > -1) {
  //     return [nums.indexOf(target - last), nums.length]
  //   }
  //   i--
  // }
  const obj = {}

  for (var i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num in obj) {
      return [obj[num], i]
    } else {
      obj[target - num] = i
    }
  }

};
// @lc code=end

