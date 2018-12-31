import React from 'react';
import styled from 'styled-components';

import ProfilePhoto from '../ProfilePhoto';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <ProfilePhoto />
      <H1>Hi! I'm Melanie 👋</H1>
      <Byline>
        I'm a Los Angeles-based front-end developer who's worked across the
        stack. Perpetually tinkering, I've contributed to numerous open source
        projects and love everything React and Node.
      </Byline>
    </Container>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.header``;

const Container = styled.div``;

const H1 = styled.h1``;

const Byline = styled.p``;
