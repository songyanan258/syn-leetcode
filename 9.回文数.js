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
    if (x < 0) return false
    const xArr = (x + '').split('')
    for (let i = 0; i < xArr.length; i++) {
        if (xArr[i] !== xArr[xArr.length - i - 1]) {
            return false
        }
    }

    return true
};
// @lc code=end

