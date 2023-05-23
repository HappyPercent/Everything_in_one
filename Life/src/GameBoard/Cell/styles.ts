import styled from 'styled-components';

export const Cell = styled.div<{ $alive: boolean }>`
  background-color: ${({ $alive }) => ($alive ? 'red' : 'white')};
  width: 10px;
  height: 10px;
`;
