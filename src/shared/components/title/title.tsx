import { ReactElement } from 'react';
import styled from 'styled-components';

const titleSizes: any = {
  lg: '1.5rem',
  md: '1.2rem',
  sm: '1rem',
};

const TitleText = styled.h3<{ $size: 'lg' | 'md' | 'sm' }>`
  margin: 0;
  font-size: ${props => titleSizes[props.$size]};
  padding: 5px;
`;

const TitleLine = styled.hr`
  border: none;
  border-bottom: 3px solid ${props => props.theme.palette.highlight};
  width: 16px;
  margin: 0 4px;
`;

interface TitleProps {
  size: 'lg' | 'md' | 'sm';
  children: any;
}

function Title({ size, children }: TitleProps): ReactElement {
  return (
    <div>
      <TitleText $size={size}>{children}</TitleText>
      <TitleLine />
    </div>
  );
}

Title.defaultProps = {
  size: 'md',
};

export default Title;
