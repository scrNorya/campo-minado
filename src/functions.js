const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((e, row) => {
      return Array(columns)
        .fill(0)
        .maps((e, column) => {
          return {
            row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          };
        });
    });
};

const spreadMines = (board, minesAmount) => {
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;
  while (minesPlanted < minesAmount) {
    const rowSelected = parseInt(Math.random() * rows, 10);
    const columnSelected = parseInt(Math.random() * columns, 10);

    if (!board[rowSelected][columnSelected].mined) {
      board[rowSelected][columnSelected].mined = true;
      minesPlanted++;
    }
  }
};

const createMineBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

export {createMineBoard};
