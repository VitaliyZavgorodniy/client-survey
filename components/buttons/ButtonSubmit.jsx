import styled from "styled-components";
import React from "react";
import { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const ButtonSubmit = ({
  onClick,
  title,
  isFetching,
  progress,
  isReady,
  full,
}) => {
  return (
    <Wrapper>
      <Button
        progress={100 - (progress / full) * 100}
        disabled={isFetching || !isReady}
        isReady={isReady}
        onClick={onClick}
        isFetching={isFetching}
      >
        <span>
          {!isReady ? (
            `${progress} / ${full}`
          ) : isFetching ? (
            <FontAwesomeIcon icon={faSpinner} />
          ) : (
            title
          )}
        </span>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2px;
  width: 100%;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: ${(p) => (p.isReady ? "center" : "flex-end")};
  align-items: center;
  padding: 10px;
  width: 100%;
  border: 2px solid #ed3644;
  border-radius: 5px;
  background: linear-gradient(to left, #fff ${(p) => p.progress}%, #ed3644 0%);
  color: ${(p) => (p.isReady ? "#fff" : "#ed3644")};
  opacity: ${(p) => (p.isDisabled ? "0.7" : "1")};
  transform-origin: center;
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    font-family: Cuprum, sans-serif;
    animation: ${(p) => (p.isFetching ? rotate : "none")} 2s linear infinite;
  }
  &:hover {
    cursor: pointer;
  }
`;
