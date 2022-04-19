import {
  useEffect,
  useState,
  ReactElement,
  Fragment,
} from 'react';

import Title from '@shared/components/title/title';
import FlexContainer from '@shared/components/flex/container';
import Filters from './filters/filters';
import Pager from '@shared/components/pager/pager';

import CardDetails from './card-details/card-details';

import { StickyDiv, Card } from './styled.components';
import { cardsSrvc } from './cards.service';

function Cards(): ReactElement<typeof Cards> {
  const pagerInit = {
    page: 1,
    pageSize: 20,
    total: 0,
  };
  const [pagerPrams, setPagerParams] = useState(pagerInit);

  const [cards, setCards] = useState<Array<any>>([]);
  const [filters, setFilters] = useState<any>({
    name: '',
    colors: '',
  });
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const viewDetails = (thisCard: any) => (_: any) => {
    setSelectedCard(thisCard);
  };

  useEffect(() => { loadCards() }, [pagerPrams.page, pagerPrams.pageSize]);

  useEffect(() => {
    if (pagerPrams.page > 1) {
      // Load cards by changing the page
      const auxPagerParams = { ...pagerPrams };
      auxPagerParams.page = 1;
      setPagerParams(auxPagerParams);
    } else {
      // Load cards and stay in page 1
      loadCards();
    }
  }, [filters.name, filters.colors]);

  const pageChange = (newPage: number) => {
    const auxPagerParams = { ...pagerPrams };
    auxPagerParams.page = newPage;
    setPagerParams(auxPagerParams);
  };

  const loadCards = async (): Promise<void> => {
    const auxPagerParams = { ...pagerPrams };
    const resp = await cardsSrvc.getAll({
      page: auxPagerParams.page,
      filters,
    });

    if (resp && resp.status === 200) {
      auxPagerParams.total = +resp.headers['total-count'];
      setPagerParams(auxPagerParams);
      setCards(resp.data.cards);
    } else {
      setCards([]);
      setPagerParams(pagerInit);
    }
  };

  const updateFilters = (newFilters: any): void => {
    setFilters(newFilters);
  };

  return (
    <>
      <StickyDiv $mWidth="100%">
        <Title size="lg">Cards Database</Title>
        <Filters onFilter={updateFilters} />
      </StickyDiv>
      <FlexContainer
        $fd="row"
        $ai="center"
        $width="90%"
        $columns="4"
      >
        {cards.map((card: any) => (
          <Fragment key={card.id}>
            <Card
              src={card.imageUrl}
              alt={card.name}
              title={card.name}
              onClick={viewDetails(card)}
            />
          </Fragment>
        ))}
      </FlexContainer>
      <Pager {...pagerPrams} newPage={pageChange} />
      <CardDetails card={selectedCard} onClose={() => setSelectedCard(null)} />
    </>
  );
}

export default Cards;
