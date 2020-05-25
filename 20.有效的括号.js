/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = []
  const obj = { '{': '}', '[': ']', '(': ')' }
  for (let i = 0; i < s.length; i++) {
    let letter = s[i]
    if (letter in obj) {
      arr.push(letter)
    } else {
      if (letter !== obj[arr.pop()]) {
        return false
      }
    }
  }
  return !arr.length

};
// @lc code=end

