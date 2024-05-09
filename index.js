function solveSudoku(board) {
  solve(board);
  function solve(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === ".") {
          for (let num = 1; num <= 9; num++) {
            const numChar = num.toString();
            if (isValid(board, i, j, numChar)) {
              board[i][j] = numChar;
              if (solve(board)) return true;
              board[i][j] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  function isValid(board, row, col, num) {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 9; i++) {
      if (
        board[row][i] === num ||
        board[i][col] === num ||
        board[boxRow + Math.floor(i / 3)][boxCol + (i % 3)] === num
      )
        return false;
    }
    return true;
  }
}
