/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */
//对于区间类问题，尝试以区间内的第一个元素为索引进行排序

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //定义结果数组
  const res = []
  //缓存区间个数
  const len = intervals.length
  //将所有区间按照第一个元素大小排序
  intervals.sort((a, b) => a[0] - b[0])
  //处理边界情况
  if (!intervals || !intervals.length) {
    return []
  }
  //将第一个区间，推入结果数组
  res.push(intervals[0])
  //遍历所有区间
  for (let i = 1; i < len; i++) {
    //取结果数组中的最后一个元素，作为当前对比的参考
    prev = res[res.length - 1]
    //若满足交错关系
    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][1])
    } else {
      res.push(intervals[i])
    }
  }
  return res
};
// @lc code=end

