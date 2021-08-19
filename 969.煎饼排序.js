/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  const ind = new Array()//index数组
  const ret = []//答案数组
  for (let i = 0; i < arr.length; i++)ind[arr[i]] = i
  for (let i = arr.length; i >= 1; i--) {
    if (ind[i] !== 0) ret.push(ind[i] + 1)
    reverse(arr, ind[i], ind)
    if (i != 1) ret.push(i)
    reverse(arr, i - 1, ind)
  }
  return ret
};

let reverse = function (arr, n, ind) {
  for (let i = 0, j = n; i < j; i++, j--) {
    [arr[j], arr[i]] = [arr[i], arr[j]]
    ind[arr[i]] = i
    ind[arr[j]] = j
  }
  return
}
// @lc code=end

