/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const res = []
  let currentIndex = 0

  while (currentIndex < intervals.length && intervals[currentIndex][1] < newInterval[0]) {
    res.push(intervals[currentIndex])
    currentIndex++
  }

  while (currentIndex < intervals.length && newInterval[1] >= intervals[currentIndex][0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[currentIndex][0])
    newInterval[1] = Math.max(newInterval[1], intervals[currentIndex][1])
    currentIndex++
  }
  res.push(newInterval)

  while (currentIndex < intervals.length) {
    res.push(intervals[currentIndex])
    currentIndex++
  }
  return res
};
// @lc code=end

