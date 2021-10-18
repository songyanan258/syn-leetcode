/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
//要维护一个小顶堆
let data = []
let cnt = 0
var nthUglyNumber = function (n) {
  let ans = 0
  data = []
  cnt = 0
  push(1)
  while (n--) {
    ans = top()
    pop()
    if (ans % 5 == 0) {
      push(ans * 5)
    } else if (ans % 3 == 0) {
      push(ans * 3)
      push(ans * 5)
    } else {
      push(ans * 2)
      push(ans * 3)
      push(ans * 5)
    }
  }
  return ans
};



const top = function () {
  return data[0]
}

const size = function () {
  return cnt
}

const push = function (val) {
  data[cnt++] = val
  let ind = cnt - 1
  while (data[ind] < data[parseInt((ind - 1) / 2)]) {
    [data[ind], data[parseInt((ind - 1) / 2)]] = [data[parseInt((ind - 1) / 2)], data[ind]]
    ind = parseInt((ind - 1) / 2)
  }
  return
}

const pop = function () {
  if (size() == 0) return
  [data[0], data[cnt - 1]] = [data[cnt - 1], data[0]]
  cnt--
  let ind = 0
  let n = cnt - 1
  while (ind * 2 + 1 <= n) {
    let temp = ind
    if (data[ind] > data[ind * 2 + 1]) {
      temp = ind * 2 + 1
    }
    if (ind * 2 + 2 <= n && data[temp] > data[ind * 2 + 2]) temp = ind * 2 + 2;
    if (temp == ind) break;
    [data[temp], data[ind]] = [data[ind], data[temp]]
    ind = temp
  }
  return
}
// @lc code=end

