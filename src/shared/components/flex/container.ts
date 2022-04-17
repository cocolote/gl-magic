import styled from 'styled-components';

const colSizes: any = {
  '1': '100%',
  '2': '50%',
  '3': '33.333333%',
  '4': '25%',
  '5': '20%',
};

type flexProps = {
  $fd?: string,
  $jc?: string,
  $ai?: string,
  $width?: string,
  $mWidth?: string,
  $columns?: string,
};

const FlexContainer = styled.div<flexProps>`
  display: flex;
  flex-direction: ${props => props.$fd || 'column'};
  align-items: ${props => props.$ai || 'stretch'};
  justify-content: ${props => props.$jc || 'flex-start'};
  flex-grow: 1;
  flex-shrink: 0;
  width: ${props => props.$width || 'inherit'};
  max-width: ${props => props.$mWidth || '1150px'};
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 -8px;

  & > * {
    padding: 8px;
    width: ${props => colSizes[props.$columns || '1']}
  }
`;

export default FlexContainer;
