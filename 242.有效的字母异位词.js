/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

  if (s.length !== t.length) return false
  //obj 用来存储出现字符的次数
  let index = 0, obj = {}

  while (index < s.length) {
    //s字符串中出现一次加一
    if (obj[s[index]] !== undefined) {
      obj[s[index]] += 1
    } else {
      obj[s[index]] = 1
    }

    //t字符串中出现一次减一
    if (obj[t[index]] !== undefined) {
      obj[t[index]] -= 1
    } else {
      obj[t[index]] = -1
    }
    index++
  }

  //当所有的字符次数都为0时说明是异位字符，否则返回false
  for (const [key, val] of Object.entries(obj)) {
    if (val !== 0) return false
  }


  return true

};
// @lc code=end

