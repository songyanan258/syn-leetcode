/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  let arr = new Array(n).fill(0)

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i == 0 && j == 0) {
        arr[i] = 1
      }

      if (obstacleGrid[i][j] == 1) {
        arr[j] = 0
      } else if (j > 0) {
        arr[j] += arr[j - 1]
      }
    }
  }
  return arr[n - 1]
};
// @lc code=end

