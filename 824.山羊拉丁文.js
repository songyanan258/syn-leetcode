/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  //切割字符串
  let arr = S.split(' '), len = arr.length
  //遍历
  for (let i = 0; i < len; i++) {
    console.log(arr[i])
    //如果原音开头
    if (!arr[i].match(/^[a|e|i|o|u|A|E|I|O|U]/)) {
      arr[i] = arr[i].slice(1) + arr[i][0]
    }
    arr[i] = arr[i] + 'ma'
    arr[i] = arr[i].padEnd(i + arr[i].length + 1, 'a')
  }
  return arr.join(' ')
};
// @lc code=end

