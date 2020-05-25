/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start



function backtrack(candidates, target, res, temp = [], first = 0) {
  if (target < 0) return
  if (target == 0) {
    res.push([...temp])
    return
  }
  for (var i = first; i < candidates.length; i++) {
    temp.push(candidates[i])
    backtrack(candidates, target - candidates[i], res, temp, i)
    temp.pop()
  }

}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = []
  backtrack(candidates, target, res)
  return res
};
// @lc code=end

