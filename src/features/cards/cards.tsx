import { useEffect, useState, ReactElement } from 'react';

import Title from '@shared/components/title/title';
import TextField from '@shared/components/text-field/text-field';
import FlexContainer from '@shared/components/flex/container';

import { StickyDiv } from './styled.components';
import { cardsSrvc } from './cards.service';

function Cards(): ReactElement<typeof Cards> {
  const [cards, setCards] = useState([]);
  const [searchPayload, setSearchPayload] = useState({
    name: '',
    colors: []
  });

  useEffect(() => {
    // Commented untile we need it.
    loadCards();
  }, []);

  const loadCards = async (): Promise<void> => {
    const auxCards = await cardsSrvc.getAll();
    console.log(auxCards);
    setCards(auxCards.cards);
  };

  const updateName = (e: any): void => {
    const auxPayload = { ...searchPayload };
    auxPayload.name = e.target.value;
    setSearchPayload(auxPayload);
  };

  return (
    <>
      <StickyDiv $mWidth="100%">
        <Title size="lg">Cards Database</Title>
        <FlexContainer
          $fd="row"
          $width="90%"
          $columns="2"
        >
          <TextField
            label="Seach by Name"
            type="text"
            name="searchName"
            value={searchPayload.name}
            onChange={updateName}
          />
          <div>Seach by Color</div>
        </FlexContainer>
      </StickyDiv>
      <FlexContainer
        $fd="row"
        $ai="center"
        $width="90%"
        $columns="4"
      >
        {cards.map((card: any) => (
          <img
            style={{ borderRadius: '20px' }}
            key={card.id}
            src={card.imageUrl}
            alt={card.name}
            title={card.name}
          />
        ))}
      </FlexContainer>
    </>
  );
}

export default Cards;
