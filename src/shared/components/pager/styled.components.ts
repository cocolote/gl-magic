import styled from 'styled-components';

const PagerContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.palette.secondaryBg};
  font-size: 0.8rem;
  z-index: 99;

  & > * {
    margin: 8px;
  }
`;

const ChangePage = styled.h3`
  cursor: pointer;
`;

const SelectPage = styled.select`
  border: ${props => props.theme.textField.border};
  border-radius: ${props => props.theme.textField.borderRadius};
  background-color: ${props => props.theme.textField.background};
  color: ${props => props.theme.palette.text.primary};
  padding: 5px;
  width: 69px;
`

export {
  PagerContainer,
  ChangePage,
  SelectPage,
};
