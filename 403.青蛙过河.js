/*
 * @lc app=leetcode.cn id=403 lang=javascript
 *
 * [403] 青蛙过河
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {

  const helper = function (stones, index, k, set) {
    const key = index * 1000 + k
    if (set.has(key)) {
      return false
    } else {
      set.add(key)
    }
    for (let i = index + 1; i < stones.length; i++) {
      const gap = stones[i] - stones[index]
      if (gap >= k - 1 && gap <= k + 1) {
        if (helper(stones, i, gap, set)) {
          return true
        }
      } else if (gap > k + 1) {
        break
      }
    }
    return index == stones.length - 1
  }

  const set = new Set()
  return helper(stones, 0, 0, set)
};
// @lc code=end

