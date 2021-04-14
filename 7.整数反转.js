/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0, mark = 1
  if (x < 0) {
    mark = -1
  }
  x = Math.abs(x)
  while (x >= 1) {
    res = res * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return res > Math.pow(2, 31) ? 0 : res * mark

};
// @lc code=end

