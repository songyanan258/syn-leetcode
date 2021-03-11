/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n == 1) return '1'
  const temp = countAndSay(n - 1).match(/(\d)\1*/g)
  let result = ''
  for (let i = 0; i < temp.length; i++) {
    result += (temp[i].length + '' + temp[i].substring(0, 1))
  }
  return result
};
// @lc code=end

