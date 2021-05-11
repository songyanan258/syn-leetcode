/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s) return 0
  let maxLen = 0, currentLen = 0, left = 0, right = 0
  while (left < s.length) {
    if (s[left] == ')' && right < left) {
      currentLen = 0
    } else if (s[left] == '(') {
      right = right < left ? left + 1 : right + 1
      for (let i = right; i < s.length; i++) {
        if (s[i] == ')') {
          right = i
          currentLen += 2
          if (currentLen > maxLen) maxLen = currentLen;
          break;
        }
      }
    }
    left++
  }
  return maxLen
};
// @lc code=end

