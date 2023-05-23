import styled from 'styled-components';

export const BoardWrapper = styled.div``;

export const BoardBox = styled.div<{ $size: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $size }) => $size}, 10px);
  grid-template-rows: repeat(${({ $size }) => $size}, 10px);
`;
