import styled from 'styled-components';
import FlexContainer from '@shared/components/flex/container';

const StickyDiv = styled(FlexContainer)`
  position: sticky;
  top: 0;
  padding: 5px 10px;
  background-color: ${props => props.theme.palette.mainBg};
  z-index: 100;
  maring-bottom: 10px;
`;

const Card = styled.img`
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.03, 1.03);
  }
`;

export { StickyDiv, Card };
