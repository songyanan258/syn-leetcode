/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  //三种颜色排序后的长度
  let indexArr = [0, 0, 0]
  //当前指针
  let current = 0
  while (current < nums.length) {
    const num = nums[current]
    nums.splice(current, 1)
    //根据不同颜色分别处理
    switch (num) {
      case 0:
        nums.splice(indexArr[0], 0, num)
        indexArr[0] = indexArr[0] + 1
        break;
      case 1:
        nums.splice(indexArr[0] + indexArr[1], 0, num)
        indexArr[1] = indexArr[1] + 1
        break;

      case 2:
        nums.splice(indexArr[0] + indexArr[1] + indexArr[2], 0, num)
        indexArr[2] = indexArr[2] + 1
        break;
    }
    current++
  }
  return nums
};
// @lc code=end

