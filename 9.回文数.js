/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let xStr = (x + '').split('')
    console.log(xStr)
    return xStr === xStr.reverse()
};
// @lc code=end

