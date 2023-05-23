export const setCellValue = (draft, boardSize, callback) => {
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      draft[`${row}_${column}`] = callback(row, column);
    }
  }
};
