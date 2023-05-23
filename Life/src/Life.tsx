import { Box, Container, Stack } from '@mui/material';
import { DataProvider } from './DataContext';
import { GameBoard } from './GameBoard';
import { Settings } from './Settings';

import * as SC from './styles';

export default function Life() {
  return (
    <DataProvider>
      <SC.Container>
        <Stack direction={'row'} spacing={3}>
          <GameBoard />
          <Settings />
        </Stack>
      </SC.Container>
    </DataProvider>
  );
}
