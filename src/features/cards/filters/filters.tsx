import { useState, Fragment, ReactElement } from 'react';

import TextField from '@shared/components/text-field/text-field';
import FlexContainer from '@shared/components/flex/container';
import Row from '@shared/components/flex/row';
import Button from '@shared/components/button/button';

import { StyledLabel } from '@shared/components/text-field/styled.components';

import { ColorButton, ColorConnector} from './styled.components';

import blackImg from './assets/black.png';
import blueImg from './assets/blue.png';
import greenImg from './assets/green.png';
import redImg from './assets/red.png';
import whiteImg from './assets/white.png';

type filtersType = {
  onFilter: (e: any) => void,
};

const deckColors = [
  { src: blackImg, id: 'black', connector: ',' },
  { src: blueImg,  id: 'blue',  connector: ',' },
  { src: greenImg, id: 'green', connector: ',' },
  { src: redImg,   id: 'red',   connector: ',' },
  { src: whiteImg, id: 'white', connector: ',' },
];

function Filters({ onFilter }: filtersType): ReactElement<typeof Filters> {
  const [name, setName] = useState<string>('');
  const [colors, setColors] = useState<Array<any>>([]);

  const updateName = (e: any) => {
    setName(e.target.value);
  };

  const addColor = (color: any) => (_: any) => {
    setColors([...colors, { ...color }]);
  };

  const removeColor = (colorIndex: number) => (_: any) => {
    setColors(colors.filter((_, i: number) => i !== colorIndex));
  };

  const toggleConnector = (colorIndex: number) => (_: any) => {
    const auxColors = [...colors];
    auxColors[colorIndex].connector = auxColors[colorIndex].connector === ','
      ? '|'
      : ',';
    setColors(auxColors);
  };

  const applyFilters = (_: any) => {
    const fColors = colors.reduce((acc: string, color: any, colorI: number) => {
      // concat logical connector
      if (colorI > 0 && colorI < colors.length)
        acc = acc + color.connector;
      // build filter e.g. white|green,white
      acc = acc + color.id;
      return acc;
    }, '');
    onFilter({ name: name, colors: fColors });
  };

  return (
    <>
      <FlexContainer
        $fd="row"
        $width="90%"
        $columns="2"
      >
        <TextField
          label="Seach by Name"
          type="text"
          name="searchName"
          value={name}
          onChange={updateName}
        />
        <FlexContainer
          $fd="column"
          $width="50%"
          $columns="1"
          $ai="flex-start"
        >
          <StyledLabel style={{ marginLeft: '10px', }}>Seach by Color</StyledLabel>
          <Row $ai="center">
            {deckColors.map((color: any) => (
              <ColorButton
                key={color.id}
                onClick={addColor(color)}
                src={color.src}
                alt={color.id}
                title={color.id}
              />
            ))}
          </Row>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        $fd="row"
        $width="90%"
        $columns="1"
      >
        <Row $ai="center">
          {colors.map((color: any, i: number) => (
            <Fragment key={color.id + i}>
              {(colors.length > 1 && i > 0) && (
                <ColorConnector onClick={toggleConnector(i)}>
                  {color.connector === ',' ? 'and':'or'}
                </ColorConnector>
              )}
              <ColorButton
                onClick={removeColor(i)}
                src={color.src}
                alt={color.id}
                title={color.id}
              />
            </Fragment>
          ))}
        </Row>
      </FlexContainer>
      <FlexContainer
        $fd="row"
        $width="90%"
        $columns="1"
      >
        <Button onClick={applyFilters}>Search</Button>
      </FlexContainer>
    </>
  );
}

export default Filters;
