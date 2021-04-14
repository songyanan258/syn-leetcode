/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1
  digits[index] = digits[index] + 1
  while (digits[index] >= 10 && index >= 0) {
    digits[index] = 0
    index--
    digits[index] = digits[index] + 1
    if (index < 0) {
      digits.unshift(1)
    }
  }

  return digits
};
// @lc code=end

