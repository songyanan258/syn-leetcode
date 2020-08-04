/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftCur = 0
  let rightCur = height.length - 1
  let res = 0
  let leftMax = 0
  let rightMax = 0

  while (leftCur < rightCur) {
    const left = height[leftCur]
    const right = height[rightCur]
    if (left < right) {
      leftMax = Math.max(left, leftMax)
      res += leftMax - left
      leftCur++
    } else {
      rightMax = Math.max(right, rightMax)
      res += rightMax - right
      rightCur--
    }
  }
  return res
};
// @lc code=end

