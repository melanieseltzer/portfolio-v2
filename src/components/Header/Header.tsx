import React from 'react';
import styled from 'styled-components';

import { COLORS, maxWidth } from '../../constants';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <div>
        <H1>Hi! I'm Melanie 👋</H1>
        <Byline>
          I'm a Los Angeles-based front-end developer who's worked across the
          stack. I love building cool stuff and learning everything I can in the
          process 🚀
        </Byline>
      </div>
    </Container>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.header`
  background: ${COLORS.gray.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  @media (min-width: 1024px) {
    height: calc(100vh);
  }
`;

const Container = styled.div`
  margin: 100px 20px;
  max-width: ${maxWidth};
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin: 0 0 1rem 0;
  @media (min-width: 375px) {
    font-size: 2.3rem;
  }
  @media (min-width: 414px) {
    font-size: 2.5rem;
  }
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.1rem;
  }
`;

const Byline = styled.p`
  font-family: 'Lora', sans-serif;
  font-size: 1.1rem;
  line-height: 2rem;
  margin: 0;
  @media (min-width: 375px) {
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.875rem;
    line-height: 2.875rem;
  }
`;
