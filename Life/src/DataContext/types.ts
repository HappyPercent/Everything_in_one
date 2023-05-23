export interface IDataContext {
  gameInProgress: boolean;
  tickSize: number;
  setTickSize: (value: number) => void;
  boardSize: number;
  setBoardSize: (value: number) => void;
  onStart: () => void;
  onStop: () => void;
  onRandomize: () => void;
  state: IState;
}

export interface IState {
  [key: string]: boolean;
}
