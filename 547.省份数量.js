/*
 * @Description: 
 * @Author: songyanan
 * @Date: 2022-03-22 17:06:37
 * @LastEditTime: 2022-03-22 18:38:48
 * @LastEditors: songynan
 * @FilePath: /leetcode/547.省份数量.js
 */
/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const numMap = [];

var findCircleNum = function (isConnected) {
  if (isConnected.length == 0) return 0;
  let n = cnt = isConnected.length;
  init(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (isConnected[i][j] == 1) {
        cnt -= merge(i, j)
      }
    }
  }
  console.log(numMap);
  return cnt;
};

function init(n) {
  for (let i = 0; i <= n; i++) {
    numMap[i] = i;
  }
}

function find(x) {
  if (numMap[x] != x) numMap[x] = find(numMap[x]);
  return numMap[x];
}

function merge(x, y) {
  const fx = find(x);
  const fy = find(y);
  if (fx == fy) return 0;
  numMap[fx] = fy;
  return 1;
}





// @lc code=end
