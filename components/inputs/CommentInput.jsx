import styled from "styled-components";

export const CommentInput = ({
  onChange,
  value,
  title,
  id,
  placeholder,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input
        placeholder={placeholder}
        type="text"
        onChange={(e) => onChange(id, e.target.value)}
        value={value}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
  width: 100%;
`;

const Title = styled.div``;

const Input = styled.textarea`
  padding: 3px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #889EAF;
  resize: none;
  &:focus {
    border-bottom: 1px solid #ed3644;
  }
`;
