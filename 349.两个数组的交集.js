/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let analogy1 = 0, analogy2 = 0, list = new Set()
  while (analogy1 < nums1.length && analogy2 < nums2.length) {
    let num1 = nums1[analogy1]
    let num2 = nums2[analogy2]
    if (num1 < num2) {
      analogy1++
    } else if (num1 > num2) {
      analogy2++
    } else {
      list.add(num1)
      analogy1++
      analogy2++
    }
  }
  return Array.from(list)
};
// @lc code=end

