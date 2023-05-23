import { IState } from '../types';

export const getInitialBoartState = (size: number, tick: number) => {
  const state: IState = {};
  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      state[`${row}_${column}`] = true;
    }
  }

  return state;
};
