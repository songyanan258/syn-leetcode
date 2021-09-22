/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let stack = []
  let num = 0
  let len = 0
  while (num < s.length) {
    let char = s.slice(num, num + 1)
    if (char !== ' ') {
      if (s.slice(num - 1, num) !== '' && s.slice(num - 1, num) == ' ') {
        len = 1
      } else {
        len += 1
      }
    }
    num++
  }
  return len
};
// @lc code=end

