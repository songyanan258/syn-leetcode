/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  //思路是别人的，选取最大最小值保留下来，如果有大于最大值的，说明成立
  if (nums == null || nums.length < 3) return false
  let min = Infinity
  let max = Infinity
  let n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      //满足条件
      return true
    } else if (nums[i] > min) {
      //如果大于最大值，小于最小值，则最大值变更
      max = nums[i]
    } else if (nums[i] < min) {
      //如果小于最小值，则最小值变更
      min = nums[i]
    }

  }
  return false
};
// @lc code=end