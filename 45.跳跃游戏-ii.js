/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let length = nums.length
  let end = 0
  let maxPosition = 0
  let steps = 0
  for (let i = 0; i < length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (i == end) {
      end = maxPosition
      steps++
    }
  }
  return steps
};
// @lc code=end

