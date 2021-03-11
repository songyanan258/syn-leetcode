/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //九宫格
  let box = new Array(9).fill(Infinity).map(() => new Map())
  //纵向
  let row = new Array(9).fill(Infinity).map(() => new Map())
  //横向
  let col = new Array(9).fill(Infinity).map(() => new Map())

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue
      let num = board[i][j]
      //看看是哪个盒子
      let box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (box[box_index].has(board[i][j])) return false
      if (row[i].has(board[i][j])) return false
      if (col[j].has(board[i][j])) return false
      box[box_index].set(board[i][j], 1)
      row[i].set(board[i][j], 1)
      col[j].set(board[i][j], 1)
    }
  }
  return true
};
// @lc code=end

