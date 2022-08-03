module.exports = function towelSort(matrix) {
  let stack = [];
  if (matrix === undefined) {
    return matrix = [];
  }
  else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          stack.push(matrix[i][j])
        }
      }
      else {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          stack.push(matrix[i][j])
        }
      }
    }
    return stack;
  }
}
