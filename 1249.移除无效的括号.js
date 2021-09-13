/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  if (s.length == 0) return s
  let cns = t = ''
  let cnt = 0

  //向右遍历除去多余右括号
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ')') {
      cnt += (s[i] == '(')
      t += s[i]
    } else {
      if (cnt == 0) continue
      cnt--
      t += ')'
    }
  }
  cnt = 0
  //向左遍历除去左括号
  for (let i = t.length - 1; i >= 0; i--) {
    if (t[i] !== '(') {
      cnt += (t[i] == ')')
      cns += t[i]
    } else {
      if (cnt == 0) continue
      cnt--
      cns += '('
    }
  }
  return cns.split('').reverse().join('')
};
// @lc code=end

