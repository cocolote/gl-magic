import styled from 'styled-components';

const titleSizes: any = {
  lg: {
    fontSize: '1.5rem',
    textPadding: '5px',
    lineWidth: '16px'
  },
  md: {
    fontSize: '1.2rem',
    textPadding: '5px',
    lineWidth: '16px'
  },
  sm: {
    fontSize: '1rem',
    textPadding: '2px 5px',
    lineWidth: '10px'
  },
};

const TitleText = styled.h3<{ $size: 'lg' | 'md' | 'sm' }>`
  margin: 0;
  font-size: ${props => titleSizes[props.$size].fontSize};
  padding: ${props => titleSizes[props.$size].textPadding};
`;

const TitleLine = styled.hr<{ $size: 'lg' | 'md' | 'sm' }>`
  border: none;
  border-bottom: 3px solid ${props => props.theme.palette.highlight};
  width: ${props => titleSizes[props.$size].lineWidth};
  margin: 0 4px;
`;

export {
  TitleText,
  TitleLine,
};
