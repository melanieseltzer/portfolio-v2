import React from 'react';
import styled from 'styled-components';
import {
  FaCodepen,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter
} from 'react-icons/fa';

import { COLORS } from '../../constants';

const Footer = () => (
  <FooterWrapper>
    <FooterIcons>
      <IconList>
        <Icon>
          <Link
            href="https://github.com/melanieseltzer"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FaGithub
              color={COLORS.secondary.light}
              aria-labelledby="GitHub"
              size="1.8rem"
            />
          </Link>
        </Icon>
        <Icon>
          <Link
            href="https://codepen.io/melanieseltzer"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FaCodepen
              color={COLORS.secondary.light}
              aria-labelledby="Codepen"
              size="1.8rem"
            />
          </Link>
        </Icon>
        <Icon>
          <Link
            href="https://twitter.com/melanieseltzer"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FaTwitter
              color={COLORS.secondary.light}
              aria-labelledby="Twitter"
              size="1.8rem"
            />
          </Link>
        </Icon>
        <Icon>
          <Link
            href="https://medium.com/@melanieseltzer"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FaMedium
              color={COLORS.secondary.light}
              aria-labelledby="Medium"
              size="1.8rem"
            />
          </Link>
        </Icon>
        <Icon>
          <Link
            href="https://www.linkedin.com/in/melanieseltzer"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FaLinkedin
              color={COLORS.secondary.light}
              aria-labelledby="LinkedIn"
              size="1.8rem"
            />
          </Link>
        </Icon>
        <Icon>
          <Link
            href="mailto:melleh11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FaEnvelope
              color={COLORS.secondary.light}
              aria-labelledby="Email"
              size="1.8rem"
            />
          </Link>
        </Icon>
      </IconList>
    </FooterIcons>
    <Copyright>
      Built with{' '}
      <span role="img" aria-label="Heart">
        ❤️
      </span>{' '}
      using GatsbyJS
    </Copyright>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
  background: ${COLORS.secondary.lightest};
  text-align: center;
`;

const FooterIcons = styled.div`
  position: relative;
  padding-top: 1rem;
  @media (min-width: 1024px) {
    position: fixed;
    bottom: 0;
    right: 1rem;
    padding-top: 0;
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 80px;
      background-color: #9ca2b7;
      margin: 0px auto;
    }
  }
  @media (min-width: 1040px) {
    right: 1.5rem;
  }
`;

const IconList = styled.ul`
  padding: 0;
  margin: 0;
`;

const Icon = styled.li`
  display: inline-block;
  list-style: none;
  margin: 0 10px;
  @media (min-width: 1024px) {
    display: block;
    margin-bottom: 0.8rem;
  }
`;

const Link = styled.a`
  display: block;
  transition: all 0.2s ease !important;
  &:hover {
    transform: scale(1.1) !important;
  }
`;

const Copyright = styled.div`
  color: ${COLORS.secondary.lighter};
  font-family: 'Rubik', sans-serif;
  font-size: 0.9rem;
  padding: 1rem 0 1rem 0;
`;
