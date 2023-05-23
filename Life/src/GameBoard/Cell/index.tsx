import { memo } from 'react';

import * as SC from './styles';

export const Cell = memo<{ alive: boolean }>(({ alive }) => {
  return <SC.Cell $alive={alive} />;
});
