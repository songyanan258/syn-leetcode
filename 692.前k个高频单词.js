/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  if (!words.length || !k) return []
  let obj = {}
  let ans = []
  //存储单词出现的频率
  for (let i = 0; i < words.length; i++) {
    const item = words[i]
    if (obj[item]) {
      obj[item] += 1
    } else {
      obj[item] = 1
    }
  }
  const res = Object.entries(obj).sort((a, b) => (b[1] - a[1]) || sortStr(a[0], b[0]) || a[0].length - b[0].length)
  for (let i = 0; i < k; i++) {
    ans.push(res[i][0])
  }

  return ans
};

//根据字母比较两个字符串的大小
const sortStr = function (str1, str2) {
  let i = 0
  while (i < str1.length && i < str2.length) {
    const char1 = str1.slice(i, i + 1)
    const char2 = str2.slice(i, i + 1)
    if (char1 && !char2) return false
    if (!char1 && char2) return true
    if (char1.charCodeAt() !== char2.charCodeAt()) {
      return char1.charCodeAt() - char2.charCodeAt()
    }
    i += 1
  }

}
// @lc code=end

