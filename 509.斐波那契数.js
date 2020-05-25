/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  // if (N === 0 || N === 1) {
  //   return N
  // }

  // return fib(N - 1) + fib(N - 2)
  let cache = []
  for (var i = 0; i <= N; i++) {
    if (i === 0 || i === 1) {
      cache[i] = i
    } else {
      cache[i] = cache[i - 1] + cache[i - 2]
    }
  }
  return cache[N]
};
// @lc code=end

