import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 0;
  padding: 10px 10px;
  border: ${props => props.theme.textField.border};
  border-radius: ${props => props.theme.textField.borderRadius};
  background-color: ${props => props.theme.textField.background};
  color: ${props => props.theme.palette.text.primary};
  font-size: 0.9rem;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 0.9rem;
  display: block;
  padding: 5px 0;
`;

export {
  StyledInput,
  StyledLabel,
};
