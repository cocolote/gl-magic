import React, { useEffect, useState } from 'react';
import { cardsSrvc } from './cards.service';

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async (): Promise<any> => {
    const auxCards = await cardsSrvc.getAll();
    setCards(auxCards.cards);
  };

  return cards.map((card: { name: string }, i: number) => (
    <div key={i}>{card.name}</div>
  ));
};

export default Cards;
