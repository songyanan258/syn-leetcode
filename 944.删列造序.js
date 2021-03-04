/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let n = strs.length
  let m = strs[0].length
  let num = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        num++
        break
      }
    }
  }

  return num
};
// @lc code=end

