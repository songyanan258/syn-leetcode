/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

  if (haystack == needle || !needle) return 0
  //双重循环
  // for (let i = 0; i < haystack.length; i++) {
  //   let index = i
  //   for (let j = 0; j < needle.length; j++) {
  //     if (haystack[index + j] !== needle[j]) {
  //       break
  //     }
  //     if (j === needle.length - 1) return index
  //   }
  // }
  // return -1

  //KMP算法
  let j = 0, i = 0, next = []
  getNext(needle, next)
  while (i < haystack.length && j < needle.length) {
    if (j == -1 || haystack[i] == needle[j]) {
      i++
      j++
    } else j = next[j]
    if (j == needle.length) return i - j

  }
  return -1
};

var getNext = function (str, next = []) {
  let len = str.length
  let i = 0; j = -1
  next[0] = -1
  while (i < len - 1) {
    if (j == -1 || str[i] == str[j]) {
      i++
      j++
      next[i] = j
    } else {
      j = next[j]
    }
  }
}

// @lc code=end

