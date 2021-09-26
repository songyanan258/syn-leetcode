/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  if (b == 0) return a
  //位运算
  const sum = a ^ b
  const carry = (a & b) << 1
  return getSum(sum, carry)
};
// @lc code=end

