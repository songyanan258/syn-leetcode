/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  if (!heights || !heights.length) return 0
  let max = -1
  const len = heights.length
  for (let i = 0; i < len; i++) {
    if (i == len - 1 || heights[i] > heights[i + 1]) {
      let minHeight = heights[i]
      for (let j = i; j >= 0; j--) {
        minHeight = Math.min(minHeight, heights[j])
        max = Math.max(max, minHeight * (i - j + 1))
      }
    }
  }
  return max
};
// @lc code=end

