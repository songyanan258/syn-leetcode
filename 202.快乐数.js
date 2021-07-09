/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, obj = {}) {
  //判断链表是否有环
  if (obj.hasOwnProperty(typeof n + n)) return false
  obj[typeof n + n] = true
  const res = n.toString().split('').reduce((a, b) => {
    return a + Number(b) * Number(b)
  }, 0)
  return res === 1 ? true : isHappy(res, obj)

};
// @lc code=end

