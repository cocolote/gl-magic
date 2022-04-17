import { ReactElement } from 'react';
import { StyledInput, StyledLabel } from './styled.components';

type propsType = {
  type: string,
  name: string,
  value: string | number,
  label?: string,
  placeholder?: string,
  onChange: (v: any) => any,
}

function TextField({
  label,
  placeholder,
  type,
  name,
  value,
  onChange
}: propsType): ReactElement<typeof TextField> {

  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
