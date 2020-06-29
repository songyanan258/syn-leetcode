/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  //结果数组
  const res = []
  //组合数组
  const subset = []

  dfs(1)

  function dfs(index) {
    if (subset.length === k) {
      res.push(subset.slice())
      return
    }
    //开始遍历
    for (let i = index; i <= n; i++) {
      subset.push(i)
      //递归
      dfs(i + 1)
      subset.pop()
    }
  }
  return res
};
// @lc code=end

