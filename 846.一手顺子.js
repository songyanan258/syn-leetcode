/*
 * @lc app=leetcode.cn id=846 lang=javascript
 *
 * [846] 一手顺子
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function (hand, W, min) {
  while (hand.length && (min = Math.min(...hand)) > -1) {
    for (let i = 0, j; i < W; i++) {
      if ((j = hand.indexOf(min + i)) > -1) {
        hand.splice(j, 1)
      } else {
        return false
      }
    }
  }
  return true
};
// @lc code=end

