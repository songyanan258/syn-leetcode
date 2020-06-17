/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let len = s.length, l = 0, r = len - 1
  while (l < r && s[l] === s[r]) {
    l++
    r--
  }
  if (isPalindrome(l + 1, r)) {
    return true
  }
  if (isPalindrome(l, r - 1)) {
    return true
  }


  //判断是否回文
  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false
      }
      st++
      ed--
    }
    return true
  }

  return false

};
// @lc code=end

