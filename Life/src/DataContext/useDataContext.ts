import { useContext } from 'react';
import { DataContext } from '.';

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useDataContext should be invoked inside DataProvider');
  }

  return context;
};
