/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (a, b) {
  if (a.length !== b.length) return false
  if (a == b) return check(a)//如果两个字符串相等，查找是否有重复元素
  let i = j = 0
  while (a[i] == b[i]) i++;//查找第一个不同的字符

  for (j = i + 1; j < a.length; j++) {//查找第二个字符
    if (a[j] !== b[j]) {
      if (a[j] != b[i] || a[i] != b[j]) return false;
      break;
    }

  }
  if (j == a.length) return false//如果没找到第二个不同的字符

  for (let k = j + 1; k < a.length; k++) {
    if (a[k] != b[k]) return false
  }
  return true

};


let check = function (str) {
  let obj = {}
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) return true
    obj[arr[i]] = true
  }
  return false
}
// @lc code=end

