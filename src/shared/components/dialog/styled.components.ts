import styled from 'styled-components';
import FlexContainer from '@shared/components/flex/container';

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const DialogBody = styled(FlexContainer)`
  position: relative;
  top: 15vh;
  border-radius: 10px;
  background-color: ${props => props.theme.palette.secondaryBg};
  flex-grow: 0;
  width: 66vw;
  margin-bottom: 25px;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${props => props.theme.palette.contrast};
  padding: 0;
  margin: 0;
`;


export {
  BackDrop,
  DialogBody,
  Divider,
};
