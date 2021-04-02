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
  const arr = s.split(' ')
  const res = arr.filter(item => item.length)
  if (!res.length) return 0

  return res[res.length - 1].length
};
// @lc code=end

