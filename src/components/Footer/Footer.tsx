import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <p>Social icons go here</p>
    <a
      href="https://github.com/melanieseltzer/portfolio-v2"
      target="_blank"
      rel="noopener noreferrer"
    >
      Built with{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer``;
