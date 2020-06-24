/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {

  this.stack1 = []
  //辅助栈
  this.stack2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  //辅助栈为空则将stack1中的数据导入stack2中
  if (this.stack2.length <= 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  //先判断stack2是否为空
  if (this.stack2.length <= 0) {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  //判断stack2的长度
  const stack2Len = this.stack2.length
  return stack2Len && this.stack2[stack2Len - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  //如果两个队列为空，那么队列为空

  return !this.stack1.length && !this.stack2.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

