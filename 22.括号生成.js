/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  let res = []
  compiler(1, '(', res, 1, n)
  return res
};
/**
 * 
 * @param {*} n 括号层次
 * @param {*} str 生成的字符串
 * @param {*} res 最后返回的数组
 * @param {*} len 当前生成括号对数
 * @param {*} length 总生成括号对数
 */
var generateParenthesis = function (n) {
  let res = []
  compiler(1, '(', res, 1, n)
  return res
};
/**
 * 
 * @param {*} n 括号层次
 * @param {*} str 生成的字符串
 * @param {*} res 最后返回的数组
 * @param {*} len 当前生成括号对数
 * @param {*} length 总生成括号对数
 */
function compiler(n, str, res, len, length) {
  if (len === length) {
    while (n > 0) {
      str += ")"
      n--
    }
    res.push(str)
    return
  }
  if (n > 0) {
    compiler(n + 1, str + '(', res, len + 1, length)
    compiler(n - 1, str + ')', res, len, length)
  } else {
    compiler(n + 1, str + '(', res, len + 1, length)
  }
}
// @lc code=end

