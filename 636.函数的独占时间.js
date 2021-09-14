/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  //用栈解决
  let ans = []
  for (let i = 0; i < n; i++) {
    ans.push(0)
  }
  let stack = []
  let pre = 0
  //遍历log日志
  for (let i = 0; i < logs.length; i++) {
    let item = logs[i].split(':')
    let id = item[0] * 1
    let status = item[1]
    let time = item[2] * 1
    //累加栈顶元素的时间
    if (stack.length) {
      //额外注意，当为end的时候要多酸一个时间单位
      ans[stack[stack.length - 1]] += (time - pre + (status == 'end'))
      pre = time + (status == 'end')
    }
    //start时，id入栈，end时id出栈
    if (status == 'start') {
      stack.push(id)
    } else {
      stack.pop()
    }
  }
  return ans
};
// @lc code=end

