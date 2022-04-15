import { React } from "react";
import styled from "styled-components";

export const RatingTable = ({ data, title, type, list }) => {
  const renderHeader = () => {
    return <Title>{title}</Title>;
  };

  const renderTable = () => {
    const element = data.map((item, index) => {
      return (
        <Row key={index} isEven={index % 2 == 0}>
          <Name>{item[list]}</Name>
          <Item>
            {item[type].mark1.persent}% ({item[type].mark1.count})
          </Item>
          <Item>
            {item[type].mark2.persent}% ({item[type].mark2.count})
          </Item>
          <Item>
            {item[type].mark3.persent}% ({item[type].mark3.count})
          </Item>
          <Item>
            {item[type].mark4.persent}% ({item[type].mark4.count})
          </Item>
          <Item>
            {item[type].mark5.persent}% ({item[type].mark5.count})
          </Item>
          <Item>{item[type].sum}</Item>
        </Row>
      );
    });

    return element;
  };

  return (
    <Wrapper>
      {renderHeader()}
      {data.length > 0 && (
        <Table>
          <TBody>{renderTable()}</TBody>
        </Table>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px 0;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
`;

const Table = styled.table`
  width: 840px;
`;

const TBody = styled.tbody``;

const Row = styled.tr`
  margin: 0 10px;
  border: 1px solid #8ca1a5;
  border-bottom: none;
  background-color: ${(p) => (p.isEven ? "#fff" : "#DEEDF0")};
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  &:last-child {
    border-radius: 0 0 8px 8px;
    border-bottom: 1px solid #8ca1a5;
  }
`;

const Name = styled.td`
  color: red;
`;

const Item = styled.td`
  color: blue;
`;
