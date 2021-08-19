/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
var lemonadeChange = function (bills) {
  let cnt5 = cnt10 = 0
  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i]
    switch (bill) {
      case 5:
        cnt5++
        break;
      case 10:
        if (cnt5 == 0) return false
        cnt5--
        cnt10++
        break;

      default:
        if (cnt5 !== 0 && cnt10 !== 0) {
          cnt5--
          cnt10--
        } else if (cnt5 >= 3) {
          cnt5 -= 3
        } else {
          return false
        }

    }
  }
  return true
};
// @lc code=end

