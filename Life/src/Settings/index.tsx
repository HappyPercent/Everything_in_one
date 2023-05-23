import { Box, Button, Slider, Stack, Typography } from '@mui/material';
import { useDataContext } from '../DataContext/useDataContext';

export const Settings = () => {
  const {
    onStart,
    onStop,
    gameInProgress,
    onRandomize,
    tickSize,
    setTickSize,
  } = useDataContext();

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4">Controls</Typography>
      <Button
        color="primary"
        variant="contained"
        size="medium"
        onClick={gameInProgress ? onStop : onStart}
      >
        {gameInProgress ? 'Stop' : 'Start'}
      </Button>
      <Button
        color="primary"
        variant="outlined"
        size="medium"
        onClick={onRandomize}
      >
        Randomize the board
      </Button>
      <div>
        <Typography variant="h6">Game speed</Typography>
        <Slider
          value={tickSize}
          onChange={(_, value) => setTickSize?.(Number(value))}
          min={50}
          max={500}
          step={50}
          color="primary"
        />
      </div>
    </Stack>
  );
};
