import styled from 'styled-components';

type rowProps = {
  $jc?: string,
  $ai?: string,
  $width?: string,
  $mWidth?: string,
};

const Row = styled.div<rowProps>`
  display: flex;
  flex-direction: row
  justify-content: ${props => props.$jc || 'flex-start'};
  align-items: ${props => props.$ai || 'stretch'};
  width: ${props => props.$width || 'inherit'};
  max-width: ${props => props.$mWidth || 'auto'};
  padding: 0;
  margin: 0;
`;

export default Row;
