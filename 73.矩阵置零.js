/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  //按部就班解决
  let copyArr = new Array(matrix.length)
  for (let i = 0; i < copyArr.length; i++) {
    copyArr[i] = Object.assign([], matrix[i])
  }
  for (let i = 0; i < copyArr.length; i++) {
    for (let j = 0; j < copyArr[0].length; j++) {
      if (copyArr[i][j] === 0) {
        let row = 0, column = 0
        while (row < matrix[0].length) {
          matrix[i][row] = 0
          row++
        }
        while (column < matrix.length) {
          matrix[column][j] = 0
          column++
        }
      }
    }
  }
  // console.log(copyArr)
  // return copyArr
};
// @lc code=end

