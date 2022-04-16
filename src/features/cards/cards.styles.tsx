import { FunctionComponent } from 'react';
import styled from 'styled-components';

const TitleText = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  padding: 5px;
`;

const TitleLine = styled.hr`
  border: none;
  border-bottom: 3px solid ${props => props.theme.palette.highlight};
  width: 16px;
  margin: 0 4px;
`;

interface TitleProps {
  children: any;
}

export function Title({ children }): FunctionComponent<TitleProps> {
  return (
    <div>
      <TitleText>{children}</TitleText>
      <TitleLine />
    </div>
  );
}
