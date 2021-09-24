/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
let heap = []
let m = 0
var kSmallestPairs = function (nums1, nums2, k) {
  heap = [];
  m = k;
  let ans = [];
  if (nums1.length > k) {
    nums1 = nums1.slice(0, k)
  }
  if (nums2.length > k) {
    nums2 = nums2.slice(0, k)
  }
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (heap.length <= k || getReduce([nums1[i], nums2[j]]) < getReduce(heap[0])) {
        push([nums1[i], nums2[j]])
      }
      if (heap.length > k) {
        pop()
      }
    }
  }
  for (let i = 0; i < k; i++) {
    top() && ans.push(top())
    pop()
  }
  return ans
};
//!一定要想好是用大顶堆还是用小顶堆！！！！！！
const push = function (val) {
  heap.push(val)
  let len = heap.length - 1
  while (getReduce(heap[parseInt((len - 1) / 2)]) < getReduce(heap[len])) {
    [heap[len], heap[parseInt((len - 1) / 2)]] = [heap[parseInt((len - 1) / 2)], heap[len]];
    len = parseInt((len - 1) / 2);
  }
}

const top = function () {
  return heap[0]
}

const size = function () {
  return heap.length
}
const pop = function () {
  if (heap.length == 0) return
  let len = heap.length - 1;
  [heap[0], heap[len]] = [heap[len], heap[0]];
  heap.pop()
  let ind = 0
  while (ind * 2 + 1 <= len) {
    let temp = ind
    if (heap[ind * 2 + 1] && heap[ind * 2 + 1] && getReduce(heap[temp]) < getReduce(heap[ind * 2 + 1])) {
      temp = ind * 2 + 1
    }
    if ((ind * 2 + 2 <= len) && heap[ind * 2 + 2] && getReduce(heap[temp]) < getReduce(heap[ind * 2 + 2])) {
      temp = ind * 2 + 2
    }
    if (temp == ind) break;
    [heap[temp], heap[ind]] = [heap[ind], heap[temp]];
    ind = temp
  }
  return
}

const getReduce = function (nums) {
  if (!nums || !nums.length) return 0
  return nums[0] + nums[1]
}
// @lc code=end

