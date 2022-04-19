import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;
  padding: 8px 10px;
  width: auto;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: ${props => props.theme.palette.text.primary};
  background-color: ${props => props.theme.palette.highlight};
  cursor: pointer;
`;

export default Button;
