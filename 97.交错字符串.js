/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  /**
   * 动态规划
   * 解释：在满足条件的前提下
   * 如果s1[i]+s2[j]=s3[i+j]
   * 那么这时候就有:
   *  f(i-1,j)&&s1[i-1]==s3[i+j-1]
   * f(i,j-1)&&s2[j-1]==s3[i+j-1]
   */

  let n = s1.length, m = s2.length, o = s3.length
  if (n + m !== o) return false

  let arr = new Array(m + 1)
  arr[0] = true

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      let p = i + j - 1
      if (i > 0) {
        arr[j] = arr[j] && s1.charCodeAt(i - 1) == s3.charCodeAt(p)

      }
      if (j > 0) {
        arr[j] = arr[j] || (arr[j - 1] && s2.charCodeAt(j - 1) == s3.charCodeAt(p))
      }
    }
  }
  return arr[m]

};
// @lc code=end

