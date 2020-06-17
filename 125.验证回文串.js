/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) return true
  const res = s.replace(/[^a-zA-Z\d]/g, '').toLowerCase()
  return res.split('').reverse().join('') === res
};
// @lc code=end

