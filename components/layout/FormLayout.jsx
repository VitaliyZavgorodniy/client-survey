import Head from "next/head";
import styled from "styled-components";

export const FormLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Smaki-Maki | Постав свою оцінку</title>
        <meta name="description" content="Smaki-Maki | Постав свою оцінку" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>

      <Wrapper>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  width: 100%;
  padding: 10px;
`;
