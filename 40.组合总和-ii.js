/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start

function backtrack(list, target, res, first = 0, temp = []) {
  if (target < 0) return
  if (target === 0) {
    res.push([...temp])
    return
  }

  for (var i = first; i < list.length; i++) {
    if (list[i] === list[i - 1] && i > first) continue;
    temp.push(list[i])
    backtrack(list, target - list[i], res, i + 1, temp)
    temp.pop()
  }
}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = []
  backtrack(candidates.sort((a, b) => a - b), target, res)
  return res
};
// @lc code=end

