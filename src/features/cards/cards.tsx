import { useEffect, useState, ReactElement } from 'react';
import { Title } from './cards.styles';
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
    <Title>Gatherer</Title>
  );
}

export default Cards;
