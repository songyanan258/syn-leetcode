/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []
  digits = digits.split('')
  let map = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let res = []
  while (digits.length) {
    let current = []
    let startNum = parseInt(digits.shift())
    let startArr = map[startNum - 2].split('')
    if (!res.length) {
      res = startArr
    } else {
      for (let j = 0; j < startArr.length; j++) {
        for (let i = 0; i < res.length; i++) {
          current.push(res[i] + startArr[j])
        }
      }
      res = current
    }
  }
  return res
};
// @lc code=end

