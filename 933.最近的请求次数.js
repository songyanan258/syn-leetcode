/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
//数组模拟队列
let q = new Array()
var RecentCounter = function () {
  q.length = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  q.push(t)
  while (t - q[0] > 3000) q.shift()
  return q.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

