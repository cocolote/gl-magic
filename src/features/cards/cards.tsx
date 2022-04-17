import { useEffect, useState, ReactElement } from 'react';

import Title from '@shared/components/title/title';
import TextField from '@shared/components/text-field/text-field';

import { cardsSrvc } from './cards.service';

function Cards(): ReactElement<typeof Cards> {
  const [cards, setCards] = useState([]);
  const [searchPayload, setSearchPayload] = useState({
    name: '',
    colors: []
  });

  useEffect(() => {
    // Commented untile we need it.
    //loadCards();
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
      <Title size="lg">Cards Database</Title>
      <TextField
        label="Seach by Name"
        type="text"
        name="searchName"
        value={searchPayload.name}
        onChange={updateName}
      />
    </>
  );
}

export default Cards;
