const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, column) => {
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

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

const cloneBoard = board => {
  return board.map(rows => {
    return rows.map(field => {
      return {...field};
    });
  });
};

const getNeighbors = (board, row, column) => {
  const neighbors = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];
  rows.forEach(rowElement => {
    columns.forEach(columnElement => {
      const different = rowElement !== row || columnElement !== column;
      const validRow = rowElement >= 0 && rowElement < board.length;
      const validColumn = columnElement >= 0 && columnElement <= board[0].lenth;
      if (different && validRow && validColumn) {
        neighbors.push(board[rowElement][columnElement]);
      }
    });
  });
  return neighbors;
};

const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

const openField = (board, row, column) => {
  const field = board[row][column];
  if (!field.opened) {
    field.opened = true;
    if (field.mined) {
      field.exploded = true;
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(n =>
        openField(board, n.row, n.column),
      );
    } else {
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter(n => n.mined).length;
    }
  }
};

const fields = board => [].concat(...board);

const hadExplosion = board =>
  fields(board).filter(field => field.exploded).length > 0;

const pendding = field =>
  (field.mined && !field.flagged) || (field.mined && !field.opened);

const wonGame = board => fields(board).filter(pendding).length === 0;

const showMines = board =>
  fields(board)
    .filter(field => field.mined)
    .forEach(field => (field.open = true));

export {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
};
