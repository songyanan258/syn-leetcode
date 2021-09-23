/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
let data = []
let cnt = 0

var lastStoneWeight = function (stones) {
  heap = []
  cnt = 0
  for (let i = 0; i < stones.length; i++) {
    push(stones[i])
  }
  while (cnt > 0) {
    if (cnt == 1) break;
    const data1 = top()
    pop()
    const data2 = top()
    pop()
    if (data1 !== data2) {
      push(data1 - data2)
    }
  }
  const res = top()
  console.log(data, cnt)
  return res ? res : 0
};


const push = function (val) {
  data[cnt++] = val
  let ind = cnt - 1
  while (data[ind] > data[parseInt((ind - 1) / 2)]) {
    [data[ind], data[parseInt((ind - 1) / 2)]] = [data[parseInt((ind - 1) / 2)], data[ind]]
    ind = parseInt((ind - 1) / 2)
  }
  return
}
const top = function () {
  return data[0]
}

const pop = function () {
  if (cnt == 0) return
  [data[0], data[cnt - 1]] = [data[cnt - 1], data[0]]
  cnt--
  let ind = 0
  let n = cnt - 1
  //当节点有孩子节点的时候才能下沉，否则不能下沉
  while (ind * 2 + 1 <= n) {
    let temp = ind
    if (data[ind] < data[ind * 2 + 1]) {
      temp = ind * 2 + 1
    }
    if (ind * 2 + 2 <= n && data[temp] < data[ind * 2 + 2]) temp = ind * 2 + 2;
    if (temp == ind) break;
    [data[temp], data[ind]] = [data[ind], data[temp]]
    ind = temp
  }
  data.pop()
  return
}
// @lc code=end

