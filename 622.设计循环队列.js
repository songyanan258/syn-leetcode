/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

let head, tail, cnt, k, v
// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function (m) {
  head = tail = cnt = 0
  v = new Array(m)
  k = m
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false
  cnt += 1
  v[tail++] = value
  tail %= k
  return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false
  cnt -= 1
  return (head = (head + 1) % k) || true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1
  return v[head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1

  return v[(tail - 1 + k) % k]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return cnt == 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return cnt == k
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

