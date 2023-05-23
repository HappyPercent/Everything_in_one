import React, { FC, createContext, useState } from 'react';
import { IDataContext } from './types';
import { useBoardState } from './hooks/useBoardState';

export const DataContext = createContext<Partial<IDataContext>>({});

export const DataProvider: FC = ({ children }) => {
  const state = useBoardState();

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
