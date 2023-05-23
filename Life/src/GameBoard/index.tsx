import { useDataContext } from '../DataContext/useDataContext';
import { Cell } from './Cell';

import * as SC from './styles';

export const GameBoard = () => {
  const { state, boardSize } = useDataContext();

  if (!boardSize || !state) {
    return null;
  }

  return (
    <SC.BoardWrapper>
      <SC.BoardBox $size={boardSize}>
        {Array(boardSize ** 2)
          .fill(true)
          .map((_, index) => (
            <Cell
              key={index}
              alive={
                state[`${Math.floor(index / boardSize)}_${index % boardSize}`]
              }
            />
          ))}
      </SC.BoardBox>
    </SC.BoardWrapper>
  );
};
