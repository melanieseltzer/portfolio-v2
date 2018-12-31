import React, { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';

import Footer from '../Footer';
import Header from '../Header';

import { COLORS } from '../../constants';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,
  body {
    color: ${COLORS.gray.dark};
    font-size: 16px;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  p {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
  }
  h1, h2, h3, h4 {
    font-family: 'Lora', sans-serif;
  }
  h2 {
    font-weight: 400;
    font-style: italic;
  }
  .gatsby-image-wrapper {
    border-radius: 50%;
  }
`;
