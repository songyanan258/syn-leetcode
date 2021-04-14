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
  //先保存下来符号
  if (x < 0) {
    mark = -1
  }
  x = Math.abs(x)
  //每次取末尾一位进行反转
  while (x >= 1) {
    res = res * 10 + x % 10
    //整数处理
    x = Math.floor(x / 10)
  }
  //判断是否超出界限
  return res > Math.pow(2, 31) ? 0 : res * mark

};
// @lc code=end

