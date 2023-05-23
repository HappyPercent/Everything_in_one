import { DataProvider } from './DataContext';
import { GameBoard } from './GameBoard';
import { Box, Grommet, Header } from 'grommet';
import { Settings } from './Settings';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export default function Life() {
  return (
    <Grommet full theme={theme}>
      <DataProvider>
        <Box direction="row" justify="center" align="center">
          <GameBoard />
          <Settings />
        </Box>
      </DataProvider>
    </Grommet>
  );
}
