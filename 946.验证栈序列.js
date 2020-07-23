/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const arr = []
  while (pushed.length) {
    arr.push(pushed.shift())
    while (arr.length && arr[arr.length - 1] === popped[0]) {
      popped.shift()
      arr.pop()
    }
  }

  return !popped.length
};
// @lc code=end

