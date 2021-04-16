/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = []
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      res.push('FizzBuzz')
      continue
    } else if (i % 5 == 0) {
      res.push('Buzz')
      continue;
    } else if (i % 3 == 0) {
      res.push('Fizz')
      continue;
    } else {
      res.push(i + '')
    }
  }
  return res
};
// @lc code=end

