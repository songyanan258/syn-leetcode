/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const dp = []
  //缓存字符串长度
  const len = s.length
  //初始化状态二维数组
  for (let i = 0; i < len; i++) {
    dp[i] = []
  }

  //初始化最长回文子串的两个端点值
  let st = 0, end = 0
  //初始化最长回文子串的初始值为1
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1
  }

  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1
      st = i
      end = i + 1
    }
  }

  for (let n = 3; n <= len; n++) {
    for (let i = 0; i <= len - n; i++) {
      let j = i + n - 1
      if (dp[i + 1][j - 1]) {
        if (s[i] === s[j]) {
          dp[i][j] = 1
          st = i
          end = j
        }
      }
    }
  }
  return s.substring(st, end + 1)
};
// @lc code=end

