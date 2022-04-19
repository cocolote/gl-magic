import styled from 'styled-components';
import Row from '@shared/components/flex/row';

const CardTitle = styled(Row)`
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin: 0;
    padding: 0;
  }
`;

const ManaImg = styled.img`
  margin-left: 5px;
  width: 24px;
  height: 24px;
`;

const CardArt = styled.img`
  width: 20%;
  flex-shrink: 0;
  border-radius: 10px;
  margin-right: 20px;
`;

const PropertyKey = styled.span`
  display: inline-block;
  min-width: 150px;
  font-weight: bold;
`;

const CardText = styled.div`
  white-space: pre-line;
`;

export {
  CardTitle,
  ManaImg,
  CardArt,
  PropertyKey,
  CardText
};
