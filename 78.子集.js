/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
function backtrack(nums, res, temp = [], first = 0) {
  // if (first + 1 === nums.length) return
  res.push([...temp])
  for (var i = first; i < nums.length; i++) {
    temp.push(nums[i])
    backtrack(nums, res, temp, i + 1)
    temp.pop()
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  backtrack(nums, res)
  return res
};
// @lc code=end

