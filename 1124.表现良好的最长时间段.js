/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  /**
   * 利用前缀和+暴力破解
   * 1、我们规定大于八小时的为1，小于8小时的为-1，计算数组的前缀和
   * 2、该题的目标就成了找到前缀和中差值大于0的最大长度
   */
  let sumArr = []
  let ans = 0
  for (let i = 0; i < hours.length; i++) {
    let sum = sumArr[i - 1] ? sumArr[i - 1] : 0
    let data = hours[i] > 8 ? 1 : -1
    let res = data + sum
    sumArr.push(res)
    for (let j = -1; j < i; j++) {
      let item = sumArr[j]
      if (item == undefined) { item = 0 }
      if (sumArr[i] - item > 0) {
        ans = Math.max(ans, i - j)
      }
    }
  }
  return ans
};
// @lc code=end

