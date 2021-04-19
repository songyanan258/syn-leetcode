/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  //任何合数都可以分解成m个素数的乘积，任何一首个素数，他的n倍都不是素数
  let notPrimes = []
  let count = 0
  for (let i = 2; i < n; i++) {
    if (notPrimes[i]) continue;
    count++
    for (let j = i; j < n; j += i) {
      notPrimes[j] = true
    }
  }
  return count
};
// @lc code=end