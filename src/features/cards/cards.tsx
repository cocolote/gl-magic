import {
  useEffect,
  useCallback,
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
  const [pagerPrams, setPagerParams] = useState({
    page: 1,
    pageSize: 20,
    total: 0,
  });

  const [cards, setCards] = useState<Array<any>>([]);
  const [filters, setFilters] = useState<any>({
    name: '',
    colors: '',
  });
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const viewDetails = (thisCard: any) => (_: any) => {
    setSelectedCard(thisCard);
  };

  useEffect(() => {
    const getCards = async (
      page: number,
      pageSize: number,
      fName: string,
      fColors: string,
    ): Promise<void> => {
      const resp = await cardsSrvc.getAll({
        page: page,
        filters: { name: fName, colors: fColors },
      });

      if (resp && resp.status === 200) {
        const newTotal = +resp.headers['total-count'];
        const newPage = newTotal === 0 || page > newTotal / pageSize ? 1 : page
        setPagerParams({
          page: newPage,
          pageSize: pageSize,
          total: newTotal,
        });
        setCards(resp.data.cards);
      } else {
        setCards([]);
        setPagerParams({
          page: 1,
          pageSize: pageSize,
          total: 0,
        });
      }
    };

    getCards(
      pagerPrams.page,
      pagerPrams.pageSize,
      filters.name,
      filters.colors
    );
  }, [
    pagerPrams.page,
    pagerPrams.pageSize,
    filters.name,
    filters.colors,
  ]);

  const pageChange = (newPage: number) => {
    const auxPagerParams = { ...pagerPrams };
    auxPagerParams.page = newPage;
    setPagerParams(auxPagerParams);
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
