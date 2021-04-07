/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let arr = new Array(n + 1).fill(0)
  arr[0] = 1
  arr[1] = 1
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      arr[i] += arr[j - 1] * arr[i - j]
    }
  }
  return arr[n]
};
// @lc code=end

