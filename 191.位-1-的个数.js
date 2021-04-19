/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  if (n === 0) return 0
  let res = 0
  while ((n & (n - 1)) !== 0) {
    n = n & (n - 1)
    res++
  }
  res++
  return res
};
// @lc code=end

