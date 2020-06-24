/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  //双端队列实现
  const len = nums.length
  //结果数组
  const res = []
  //初始化双端队列
  const deque = []
  //遍历数组
  for (let i = 0; i < len; i++) {
    //当队尾元素效应小于当前元素时
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      //队尾元素不断出队
      deque.pop()
    }
    deque.push(i)
    //超出滑动窗口
    while (deque.length && deque[0] <= i - k) {
      deque.shift()
    }
    if (i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }
  return res

};
// @lc code=end

