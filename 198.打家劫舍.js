/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length
  if (len <= 0) return 0
  if (len == 1) return nums[0]
  if (len == 2) return Math.max(nums[0], nums[1])
  //递归方法解决(会造成栈溢出)
  // return Math.max(rob(nums.slice(0, len - 1)), rob(nums.slice(0, len - 2)) + nums[len - 1])

  //动态规划
  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[len - 1]

};
// @lc code=end

