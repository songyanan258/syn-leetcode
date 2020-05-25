/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n, start = 1) {
  const num = parseInt((n + start) / 2)
  if (guess(num) === -1) {
    return guessNumber(num, start)
  } else if (guess(num) === 1) {
    return guessNumber(n, num + 1)
  }
  return num
};
// @lc code=end

