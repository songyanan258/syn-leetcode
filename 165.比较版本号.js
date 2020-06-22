/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let arr1 = version1.split('.')
  let arr2 = version2.split('.')
  let len = arr1.length > arr2.length ? arr1.length : arr2.length
  let cur1, cur2
  for (let i = 0; i < len; i++) {
    cur1 = arr1[i] !== undefined ? arr1[i] : 0
    cur2 = arr2[i] !== undefined ? arr2[i] : 0
    if (parseInt(cur1) > parseInt(cur2)) {
      return 1
    } else if (parseInt(cur1) < parseInt(cur2)) {
      return -1
    }
  }
  return 0
};
// @lc code=end

