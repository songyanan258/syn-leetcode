/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  if (s.length == 0 && t.length == 0) return true
  let sStr = handleStr(s)
  let tStr = handleStr(t)
  return sStr == tStr ? true : false
};

const handleStr = function (str) {
  const stack = []
  const arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '#') {
      stack.pop()
    } else {
      stack.push(arr[i])
    }
  }
  return stack.join('')
}
// @lc code=end

