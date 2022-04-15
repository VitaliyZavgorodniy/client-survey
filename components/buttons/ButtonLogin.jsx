import React from "react";
import styled from "styled-components";

export const ButtonLogin = ({ title, type, value }) => (
  <Button type={type} value={value}>
    {title}
  </Button>
);

const Button = styled.button`
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  background: #ed3644;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  transform-origin: center;
  transition: background-color 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #6ebf8b;
  }
`;
