/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */



// @lc code=start
function swap(list, n, m) {
  [list[n], list[m]] = [list[m], list[n]]
  return list
}
function backtrack(list, p, q, res = []) {
  if (p === q) {
    res.push([...list])
  } else {
    for (var i = p; i < q; i++) {
      list = swap(list, p, i)
      backtrack(list, p + 1, q, res)
      list = swap(list, i, p)
    }
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let res = []
  backtrack(nums, 0, nums.length, res)
  return res
};
// @lc code=end

