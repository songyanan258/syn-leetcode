/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid, d = Array.from({ length: grid.length }, _ => Array(grid[0].length).fill(0))) {
  //d[i][j] = Math.min(d[i][j-1],d[i-1][j]+grid[i][j])
  //d[0][0] = 0  从0 到m和0到n更新d
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      d[i][j] = (i === 0 ? j === 0 ? 0 : d[i][j - 1] : j === 0 ? d[i - 1][j] : Math.min(d[i][j - 1], d[i - 1][j])) + grid[i][j]
    }
  }

  return d[grid.length - 1][grid[0].length - 1]

};
// @lc code=end

