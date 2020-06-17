/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [], len = nums.length, sum = 0
  nums = nums.sort((a, b) => a - b)
  //遍历到第三个数
  for (let i = 0; i < len - 2; i++) {
    let l = i + 1, r = len - 1
    //遇到重复的数就跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue
    while (l < r) {
      //三数之和小于0，左指针前进
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++
        while (l < r && nums[l] === nums[l - 1]) {
          l++
        }
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--
        while (l < r && nums[r] === nums[r + 1]) {
          r--
        }
      } else {
        //得到结果
        res.push([nums[i], nums[l], nums[r]])
        //改变指针
        l++
        r--
        //处理元素重复情况
        while (l < r && nums[l] === nums[l - 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r + 1]) {
          r--
        }
      }
    }
  }
  return res
};
// @lc code=end

