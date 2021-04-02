/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (n, m) {
  const arr = new Array(n).fill(1)

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j !== 0) {
        arr[j] = arr[j] + arr[j - 1]
      }
    }
  }
  return arr[n - 1]
};
// @lc code=end

