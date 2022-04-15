import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { LoginInput } from "components/inputs/LoginInput";
import { ButtonLogin } from "components/buttons/ButtonLogin";

import { fetchLogin } from "services/serviceAccount";

const Login = () => {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) router.push("/admin");
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    fetchLogin(login, password).then((res) => {
      if (!!res.token) {
        localStorage.setItem("token", res.token);
        router.push("/admin");
      }
    });
  };

  return (
    <Wrapper>
      <LoginForm onSubmit={handleForm}>
        <LoginInput
          value={login}
          title='Логін'
          inputName='login'
          autocomplete='current-login'
          type='text'
          placeholder='введіть логін'
          onChange={(e) => setLogin(e.target.value)}
        />
        <LoginInput
          value={password}
          title='Пароль'
          inputName='password'
          autocomplete='current-password'
          type='password'
          placeholder='введіть пароль'
          onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonLogin title='Увійти' type='submit' value='Submit' />
      </LoginForm>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Login;
