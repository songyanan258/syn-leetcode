/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i])
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

