/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k
  this._peek = nums
  this.sort = function () {
    this._peek.sort((a, b) => a - b)
  }
  this.sort()
  if (this._peek.length > this.k) {
    this._peek.splice(0, this._peek.length - this.k)
  }
  return this._peek[0]
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.k > this._peek.length) {
    this._peek.push(val)
    this.sort()
    return this._peek.length == this.k ? this._peek[0] : null
  }

  let res = this._peek[0] !== undefined ? this._peek[0] : -Infinity
  if (val > res) {
    this._peek.shift()
    this._peek.push(val)
    this.sort()
  }
  return this._peek[0]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

