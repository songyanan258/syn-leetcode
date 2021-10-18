/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  let ans = 0
  if (a > b) [a, b] = [b, a];
  if (a > c) [a, c] = [c, a];
  if (b > c) [b, c] = [c, b];
  ans += Math.min(c - b, a)
  a -= ans;
  c -= ans;
  if (a > 1) {
    c -= parseInt(a / 2);
    b -= parseInt(a / 2);
    ans += a - a % 2;
  }
  ans += b;
  return ans
};
// @lc code=end

