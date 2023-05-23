import { useEffect, useRef, useState } from 'react';
import { IDataContext } from '../types';
import { produce } from 'immer';
import { getNextGenerationCellState } from '../../GameBoard/helpers/getNextGenerationCellState';
import { setCellValue } from '../helpers/setCellValue';
import { getInitialBoartState } from '../helpers/getInitialBoartState';
import { DEFAULT_SIZE, DEFAULT_TICK_SIZE } from '../constants';

export const useBoardState = (): IDataContext => {
  const gameIntervalRef = useRef<NodeJS.Timer | null>();
  const [gameInProgress, setGameInProgress] = useState(false);

  const [tickSize, setTickSize] = useState(DEFAULT_TICK_SIZE);
  const tickSizeRef = useRef<number>(tickSize);

  const [boardSize, setBoardSize] = useState(DEFAULT_SIZE);

  const [state, setState] = useState<{ [key: string]: boolean }>(
    getInitialBoartState(boardSize, tickSize)
  );

  const handleStart = () => {
    setGameInProgress(true);
  };

  const handleStop = () => {
    setGameInProgress(false);
  };

  const onRandomize = () => {
    setState((state) =>
      produce(state, (draft) => {
        setCellValue(draft, boardSize, () => Math.round(Math.random()));
      })
    );
  };

  useEffect(() => {
    if (gameInProgress && !gameIntervalRef.current) {
      gameIntervalRef.current = setInterval(() => {
        setState((state) =>
          produce(state, (draft) => {
            setCellValue(draft, boardSize, (row, column) =>
              getNextGenerationCellState(row, column, boardSize, state)
            );
          })
        );
      }, tickSizeRef.current);
    } else if (!gameInProgress && gameIntervalRef.current) {
      clearInterval(gameIntervalRef.current);
      gameIntervalRef.current = null;
    }

    if (tickSize !== tickSizeRef.current) {
      tickSizeRef.current = tickSize;
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current);
      }
      if (gameInProgress) {
        gameIntervalRef.current = setInterval(() => {
          setState((state) =>
            produce(state, (draft) => {
              setCellValue(draft, boardSize, (row, column) =>
                getNextGenerationCellState(row, column, boardSize, state)
              );
            })
          );
        }, tickSizeRef.current);
      }
    }
  }, [gameInProgress, tickSize]);

  return {
    state,
    onRandomize,
    tickSize,
    setTickSize,
    gameInProgress,
    onStart: handleStart,
    onStop: handleStop,
    boardSize,
    setBoardSize,
  };
};
