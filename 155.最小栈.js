/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (!this.stack || !this.stack.length) {
    return
  }
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let minValue = Infinity
  const { stack } = this
  for (let i = 0; i < stack.length; i++) {
    minValue = stack[i] < minValue ? stack[i] : minValue
  }
  return minValue
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

