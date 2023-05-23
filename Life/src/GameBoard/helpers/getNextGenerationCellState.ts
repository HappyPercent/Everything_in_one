import { IState } from '../../DataContext/types';

export const getNextGenerationCellState = (
  rowIndex: number,
  columnIndex: number,
  boardSize: number,
  state: IState
) => {
  const cellIsAlive = !!state[`${rowIndex}_${columnIndex}`];
  let sumOfAliveNeighbours = 0;

  for (
    let i = Math.max(rowIndex - 1, 0);
    i <= Math.min(rowIndex + 1, boardSize - 1);
    i++
  ) {
    for (
      let j = Math.max(columnIndex - 1, 0);
      j <= Math.min(columnIndex + 1, boardSize - 1);
      j++
    ) {
      sumOfAliveNeighbours += state[`${i}_${j}`] ? 1 : 0;
    }
  }

  if (cellIsAlive && [3, 4].includes(sumOfAliveNeighbours)) {
    return 1;
  } else if (!cellIsAlive && [3].includes(sumOfAliveNeighbours)) {
    return 1;
  }

  return 0;
};
