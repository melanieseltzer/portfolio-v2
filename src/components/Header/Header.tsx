import React from 'react';
import styled from 'styled-components';

import Computer from '../../images/undraw_tabs_jf82.svg';
import SVG from '../SVG';

import { COLORS, maxWidth, SharedLinkStyles } from '../../constants';

const Header = () => (
  <>
    <HeaderWrapper>
      <Container>
        <H1>Hi! I'm Melanie.</H1>
        <Byline>
          I'm a Los Angeles-based front-end developer who's worked across the
          stack. I love building{' '}
          <Link
            href="https://github.com/melanieseltzer"
            target="_blank"
            rel="noopener noreferrer"
          >
            cool stuff
          </Link>{' '}
          with React and Node while learning everything I can in the process{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </Byline>
        <ImageWrapper>
          {/* Thanks undraw.co! */}
          <img src={Computer} alt="Computer" />
        </ImageWrapper>
      </Container>
    </HeaderWrapper>
    <SVGBottomBorder>
      <SVG />
    </SVGBottomBorder>
  </>
);

export default Header;

const HeaderWrapper = styled.header`
  background-image: linear-gradient(
    to bottom,
    ${COLORS.accent.darkpurple},
    ${COLORS.accent.darkblue}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
`;

const SVGBottomBorder = styled.div`
  height: 100px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  margin: 50px 20px;
  max-width: ${maxWidth};
  @media (min-width: 1024px) {
    margin: 80px auto 30px auto;
  }
`;

const ImageWrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    margin: 0 0 0 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1000;
    img {
      width: 300px;
    }
  }
`;

const H1 = styled.h1`
  color: #fff;
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
`;

const Byline = styled.p`
  color: #e4e4e4;
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
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 1024px) {
    max-width: 60%;
  }
`;

const Link = styled.a`
  ${SharedLinkStyles}
`;
