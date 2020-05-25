/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let len = triangle.length
  let temp = triangle[len - 1]
  for (var i = len - 1; i > 0; i--) {
    const cur = triangle[i - 1]
    for (var j = 0; j < cur.length; j++) {
      cur[j] = cur[j] + Math.min(temp[j], temp[j + 1])
    }
    temp = cur
  }
  return temp[0]
};
// @lc code=end

