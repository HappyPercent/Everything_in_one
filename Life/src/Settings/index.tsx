import { Box, Button, RangeInput } from 'grommet';
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
    <Box direction="column" gap="10px" margin="10px">
      <Button
        color="brand"
        size="large"
        onClick={gameInProgress ? onStop : onStart}
        primary
        label={gameInProgress ? 'Stop' : 'Start'}
      />
      <Button
        color="brand"
        size="large"
        onClick={onRandomize}
        label=" Randomize the board"
      />
      <RangeInput
        value={tickSize}
        onChange={(event) => setTickSize?.(Number(event.target.value))}
        min={10}
        max={1010}
        step={100}
      />
    </Box>
  );
};
