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
  //生成数组反转验证
  // if (s.length === 0) return true
  // const res = s.replace(/[^a-zA-Z\d]/g, '').toLowerCase()
  // return res.split('').reverse().join('') === res
  //生成数组双指针验证
  let arr = s.match(/[0-9a-zA-Z]/g)
  let index = 0
  if (!arr) return true
  while (index < arr.length / 2) {
    if ((arr[index].toLowerCase() !== arr[arr.length - 1 - index].toLowerCase())) return false
    index++
  }

  return true
};
// @lc code=end

