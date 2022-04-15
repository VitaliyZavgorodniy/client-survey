import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const RadioFilter = ({ handler, marks }) => {
  const renderItems = () => {
    const element = marks.map(({ mark, isActive }, index) => {
      return (
        <Item key={index}>
          <Button onClick={() => handler(index)} isActive={isActive}>
            <FontAwesomeIcon icon={faStar} />
            {mark}
          </Button>
        </Item>
      );
    });

    return element;
  };

  return <Wrapper>{renderItems()}</Wrapper>;
};

const Wrapper = styled.ul`
  display: flex;
  padding: 5px;
  margin: 0;
`;

const Item = styled.li`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 5px;
  color: #fff;
  border-radius: 10px;
  background-color: ${(p) => (p.isActive ? "#ed3644" : "#DFDFDE")};
`;

const Title = styled.span``;
