import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export const RadioRating = ({ onClick, title, value, id }) => {
  const renderRating = () => {
    const a = [1, 2, 3, 4, 5];
    const element = a.map((item, index) => {
      return (
        <Icon key={index} isActive={value >= item}>
          <FontAwesomeIcon
            onClick={() => onClick(id, item)}
            icon={value >= item ? faStarSolid : faStarRegular}
          />
        </Icon>
      );
    });

    return element;
  };

  return (
    <Wrapper completed={!!value}>
      <Title>{title}</Title>
      <Content>{renderRating()}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 34px;
  padding: 0;
  margin: 8px;
  color: ${(p) => (p.isActive ? "#ed3644" : "#889EAF")};
  &:hover {
    cursor: pointer;
  }
`;
