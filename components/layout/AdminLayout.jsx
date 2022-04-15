import Head from "next/head";
import styled from "styled-components";

import { Navigation } from "../navigation/Navigation";

export const AdminLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Smaki-Maki | Постав свою оцінку</title>
        <meta name='description' content='Smaki-Maki | Постав свою оцінку' />
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
      </Head>

      <Navigation />
      <Section>{children}</Section>
    </>
  );
};

const Section = styled.section``;
