import { useEffect, useState, FunctionComponent } from 'react';
import { Title } from './cards.styles';
import { cardsSrvc } from './cards.service';

function Cards(): FunctionComponent {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async (): Promise<any> => {
    const auxCards = await cardsSrvc.getAll();
    setCards(auxCards.cards);
  };

  return (
    <Title>Gathering</Title>
  );
};

export default Cards;
