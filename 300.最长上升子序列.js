/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  //缓存序列的长度
  const len = nums.length
  //处理边界条件
  if (!len) {
    return 0
  }

  //初始化数组里面的每一个索引位的状态值
  const dp = (new Array(len)).fill(1)
  //初始化最大上升子序列的长度为1
  let maxLen = 1
  //从第二个元素开始，遍历整个数组
  for (let i = 1; i < len; i++) {
    //每遍历一个新元素，都要回头看看能不能演唱原有的上升子序列
    for (let j = 0; j < i; j++) {
      //若遇到一个比当前元素小的值，则意味着遇到了一个可以延长的上升子序列
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    //及时更新上升子序列长度的最大值
    if (dp[i] > maxLen) {
      maxLen = dp[i]
    }
  }
  //遍历完毕
  return maxLen
};
// @lc code=end

