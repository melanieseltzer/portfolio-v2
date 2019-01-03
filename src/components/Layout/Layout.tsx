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
    color: ${COLORS.secondary.dark};
    font-size: 16px;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    background: linear-gradient(
      to left,
      ${COLORS.accent.blue},
      ${COLORS.accent.purple}
    );
    background-size: 200% 3px;
    background-repeat: no-repeat;
    background-position: right bottom;
    transition: all 0.5s ease;
    &:hover {
      background-position: left bottom;
    }
  }
  p {
    font-family: 'Rubik', sans-serif;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 400;
  }
  h1, h2, h3, h4 {
    font-family: 'Lora', sans-serif;
    margin: 0;
  }
  .gatsby-image-wrapper {
    border-radius: 50%;
  }
`;
