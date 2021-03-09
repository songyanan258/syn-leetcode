/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = []
  let path = []
  nums.sort()
  let backtrace = (start) => {
    if ((path.length == 4)) {
      if (path[0] + path[1] + path[2] + path[3] == target) {
        res.push([...path])
      }
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (nums[i] == nums[i - 1] && i > start) {
        continue;
      }
      path.push(nums[i])
      backtrace(i + 1);
      path.pop()
    }
  }
  backtrace(0)
  return res;
};
// @lc code=end

