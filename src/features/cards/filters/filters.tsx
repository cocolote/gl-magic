import { useState, ReactElement } from 'react';

import TextField from '@shared/components/text-field/text-field';
import FlexContainer from '@shared/components/flex/container';

type filtersType = {
  name: string,
  colors: string,
  onChange: (e: any) => void,
};

function Filters({ name, colors, onChange }: filtersType): ReactElement<typeof Filters> {
  const [lName, setLName] = useState<string>(name);
  const [lColors, setLColors] = useState<string>(colors);
  const [filtersChangeDebounce, setFiltersChangeDebounce] = useState<any>(null);

  const updateName = (e: any) => {
    setLName(e.target.value);
    if (filtersChangeDebounce) clearTimeout(filtersChangeDebounce);
    setFiltersChangeDebounce(
      setTimeout(() => {
        onChange({
          name: e.target.value,
          colors: lColors
        });
      }, 800)
    );
  };

  return (
    <FlexContainer
      $fd="row"
      $width="90%"
      $columns="2"
    >
      <TextField
        label="Seach by Name"
        type="text"
        name="searchName"
        value={lName}
        onChange={updateName}
      />
      <div>Seach by Color</div>
    </FlexContainer>
  );
}

export default Filters;
