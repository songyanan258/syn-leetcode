/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

  let judgeStr = (str1, str2) => {
    let str1Arr = str1.split('')
    let str2Arr = str2.split('')
    while (str2Arr.length !== 0) {
      if (str2Arr.some(item => item == str1Arr[0])) {
        str1Arr.splice(1)
      } else {
        return false
      }
    }
    return true
  }

  let newArr = []

  for (let i = 0; i < strs.length; i++) {
    if (newArr.length == 0) {
      newArr.push([strs[i]])
    } else {
      for (let j = 0; j < newArr.length; j++) {

      }
    }
  }
};
// @lc code=end

