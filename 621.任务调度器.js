/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const cnt = []
  //初始话数组
  for (let i = 0; i < 26; i++) {
    cnt.push(0)
  }
  //先查找所有元素出现的次数
  for (let i = 0; i < tasks.length; i++) {
    cnt[tasks[i].charCodeAt() - 'A'.charCodeAt()] += 1
  }
  //排序找出出现最多的任务
  cnt.sort((a, b) => a - b)
  //找出出现次数平于
  let m = 0
  for (let i = cnt.length - 1; i >= 0 && cnt[i] >= cnt[cnt.length - 1]; i--, m++);
  console.log(m)
  //当n小于任务种类时，那么任务队列的长度就是需要消耗的单位时间
  return Math.max(tasks.length, (cnt[cnt.length - 1] - 1) * (n + 1) + m)
};
// @lc code=end

