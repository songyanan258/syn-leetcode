/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')

  }
  const cols = new Set();//记录列
  const diag1 = new Set();//正对角线集
  const diag2 = new Set()//反对角线
  const res = []

  const helper = (row) => {
    if (row == n) {
      const stringsBoard = board.slice()
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('')
      }
      res.push(stringsBoard);
      return
    }
    for (let col = 0; col < n; col++) {
      //如果当前校验的列、行、对角线都没有皇后，即可放置
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
        board[row][col] = 'Q'
        cols.add(col)
        diag1.add(row + col)
        diag2.add(row - col)
        helper(row + 1)
        board[row][col] = '.'
        cols.delete(col)
        diag1.delete(row + col)
        diag2.delete(row - col)
      }
    }
  }
  helper(0)
  return res
};
// @lc code=end

