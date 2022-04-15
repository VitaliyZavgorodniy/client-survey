import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonStandard = ({ title, onClick, icon }) => (
  <Button onClick={onClick}>
    {icon ? <FontAwesomeIcon icon={icon} style={{ marginRight: 5 }} /> : null}
    <Title>{title}</Title>
  </Button>
);

const Button = styled.button`
  width: 100%;
  padding: 8px 6px;
  background: transparent;
  color: #fff;
  border-radius: 10px;
  transition: background-color 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #ff6464;
  }
`;

const Title = styled.span`
  font-family: Nunito, sans-serif;
  font-size: 16px;
  font-weight: 400;
`;
