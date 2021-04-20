var setZeroes = function (matrix) {
  let copyArr = new Array(matrix.length)
  for (let i = 0; i < copyArr.length; i++) {
    copyArr[i] = Object.assign([], matrix[i])
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        let row = 0, column = 0
        while (row < matrix[0].length) {
          copyArr[i][row] = 0
          row++
        }
        while (column < matrix.length) {
          copyArr[column][j] = 0
          column++
        }
      }
    }
  }
  return copyArr
};
let s = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
console.log(setZeroes(s))