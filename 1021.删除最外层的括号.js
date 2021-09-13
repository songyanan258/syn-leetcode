/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  //去掉最外层括号
  let ret = ''
  let pre = cnt = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') cnt++
    else cnt--
    //括号成对出现，当cnt为0的时候说明此时括号是成对的
    if (cnt != 0) continue
    ret += s.slice(pre + 1, i)
    pre = i + 1
  }
  return ret

};
// @lc code=end

