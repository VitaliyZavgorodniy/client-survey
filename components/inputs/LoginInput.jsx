import styled from "styled-components";

export const LoginInput = ({
  onChange,
  title,
  inputName,
  value,
  placeholder,
  type,
  autocomplete,
}) => {
  return (
    <>
      <Title htmlFor={inputName}>{title}</Title>
      <Input
        onChange={onChange}
        value={value}
        type={type}
        name={inputName}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
    </>
  );
};

const Title = styled.label`
  color: #ed3644;
  margin-top: 10px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 5px;
  padding-bottom: 2px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #9d9d9d;
  font-size: 18px;

  &:hover {
    border-bottom: 2px solid #ed3644;
  }
`;
