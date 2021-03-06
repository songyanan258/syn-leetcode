/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0, right = 1, price = 0

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      price += prices[right] - prices[left]
    }
    left++
    right++
  }
  return price
};
// @lc code=end

