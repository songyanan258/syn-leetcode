/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
//二分思想，数学问题

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  //确保直接处理的数组总是较短的数组
  if (len1 > len2) {
    return findMedianSortedArrays(nums2, nums1)
  }
  //计算两个数组的总长度
  const len = len1 + len2
  //初始化第一个数组切入的位置
  let slice1 = 0
  //初始化第二个数组切入的位置
  let slice2 = 0
  //初始化第一个数组二分范围的左端点
  let slice1L = 0
  //初始化第一个数组二分范围的右端点
  let slice1R = len1
  let L1, L2, R1, R2
  //当slice1没有越界时
  while (slice1 <= len1) {
    //以二分元素更新slice1
    slice1 = Math.floor((slice1R - slice1L) / 2) + slice1L
    //用总长度的1/2减去slice1确定slice2
    slice2 = Math.floor(len / 2) - slice1//计算L1,L2,R1,R2
    const L1 = (slice1 === 0) ? -Infinity : nums1[slice1 - 1]
    const L2 = (slice2 === 0) ? -Infinity : nums2[slice2 - 1]
    const R1 = (slice1 === len1) ? Infinity : nums1[slice1]
    const R2 = (slice2 === len2) ? Infinity : nums2[slice2]
    //处理L1>R2的错误情况
    if (L1 > R2) {
      //将slice1R左移，今儿时slice1对应的值变小
      slice1R = slice1 - 1

    } else if (L2 > R1) {
      //反之将slice1L右移，进而使slice1对应的值变大
      slice1L = slice1 + 1
    } else {
      //如果已经符合取中位数的条件
      if (len % 2 === 0) {
        const L = L1 > L2 ? L1 : L2
        const R = R1 < R2 ? R1 : R2
        return (L + R) / 2
      } else {
        const median = (R1 < R2) ? R1 : R2
        return median
      }
    }
  }
  return -1
};
// @lc code=end

