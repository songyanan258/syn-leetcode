/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const res = parseInt(s.trim().match(/^[-+]?\d*/g)[0]) || 0
  return res > (Math.pow(2, 31) - 1)
    ? (Math.pow(2, 31) - 1)
    : res < -Math.pow(2, 31)
      ? -Math.pow(2, 31)
      : res
};
// @lc code=end
