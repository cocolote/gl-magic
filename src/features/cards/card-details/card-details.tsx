import {
  useEffect,
  ReactElement,
  useRef,
} from 'react';

import Dialog, { DialogHandler } from '@shared/components/dialog/dialog';
import FlexContainer from '@shared/components/flex/container';
import Row from '@shared/components/flex/row';

import {
  CardTitle,
  ManaImg,
  CardArt,
  PropertyKey,
  CardText
} from './styled.components';

import blackImg from '../assets/black.png';
import blueImg  from '../assets/blue.png';
import greenImg from '../assets/green.png';
import redImg   from '../assets/red.png';
import whiteImg from '../assets/white.png';

type propsType = {
  card: any,
  onClose: () => void,
};

type colorsMana = {
  [key: string]: string,
}

const colorToImage: colorsMana = {
  'B': blackImg,
  'U': blueImg,
  'G': greenImg,
  'R': redImg,
  'W': whiteImg,
};

function CardDetails({ card, onClose }: propsType): ReactElement<typeof CardDetails> {
  const dialog = useRef<DialogHandler>(null);

  useEffect(() => {
    if (card && dialog && dialog.current)
      dialog.current.open(true);
  }, [card]);

  const Title = () => {
    const formatManaCost = () => {
      return card.manaCost
        .replace(/[{}]/g, '')
        .split('')
        .map((item: string, i: number) => {
          return Object.keys(colorToImage).indexOf(item) > -1
            ? (<ManaImg key={'' + item + i} src={colorToImage[item]} alt={item} />)
            : (<span key={'' + item + i}>{item}</span>);
        });
    };

    return (
      <CardTitle $width="100%">
        <h3>{card.name}</h3>
        <Row $width="fit-content" $ai="center">{formatManaCost()}</Row>
      </CardTitle>
    );
  };

  return (
    <Dialog
      ref={dialog}
      title={<Title />}
      onClose={onClose}
    >
      <FlexContainer>
        <Row>
          <CardArt src={card?.imageUrl} alt={card?.name} />
          <FlexContainer $ai="flex-start">
            <span><PropertyKey>Type:</PropertyKey>{card?.type}</span>
            <span><PropertyKey>Rarity:</PropertyKey>{card?.rarity}</span>
            <span><PropertyKey>Artist:</PropertyKey>{card?.artist}</span>
            <span><PropertyKey>Power/Toughness:</PropertyKey>{card?.power}/{card?.toughness}</span>
            <PropertyKey>Card text:</PropertyKey>
            <CardText>{card?.text}</CardText>
          </FlexContainer>
        </Row>
      </FlexContainer>
    </Dialog>
  );
}

export default CardDetails;
