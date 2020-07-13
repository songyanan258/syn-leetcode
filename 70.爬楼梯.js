/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
//记忆数组
const f = []
var climbStairs = function (n) {

  /**
   * 记忆化搜索
   */
  if (n == 1) {
    return 1
  }

  if (n == 2) {
    return 2
  }

  if (f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return f[n]

  /**
   * 动态规划
   */
  // const arr = []
  // arr[1] = 1
  // arr[2] = 2

  // //遍历更新每层楼梯对应结果
  // for (let i = 3; i <= n; i++) {
  //   arr[i] = arr[i - 2] + arr[i - 1]
  // }
  // return arr[n]
};
// @lc code=end

