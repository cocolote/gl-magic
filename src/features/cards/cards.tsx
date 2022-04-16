import { useEffect, useState, ReactElement } from 'react';
import Title from '@shared/components/title/title';

import { cardsSrvc } from './cards.service';

function Cards(): ReactElement {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Commented untile we need it.
    //loadCards();
  }, []);

  const loadCards = async (): Promise<any> => {
    const auxCards = await cardsSrvc.getAll();
    console.log(auxCards);
    setCards(auxCards.cards);
  };

  return (
    <Title size="lg">Gatherer</Title>
  );
}

export default Cards;
