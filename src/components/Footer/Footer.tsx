import React from 'react';
import styled from 'styled-components';
import * as FontAwesome from 'react-icons/fa';

import { COLORS, socials } from '../../constants';

interface Social {
  name: string;
  link: string;
}

// Render the correct social icon
const renderIcon = (name: string) => {
  const iconSize = '1.8em';

  switch (name) {
    case 'GitHub':
      return (
        <FontAwesome.FaGithub
          color={COLORS.secondary.light}
          aria-labelledby="github"
          size={iconSize}
        />
      );
    case 'Twitter':
      return (
        <FontAwesome.FaTwitter
          color={COLORS.secondary.light}
          aria-labelledby="twitter"
          size={iconSize}
        />
      );
    case 'Codepen':
      return (
        <FontAwesome.FaCodepen
          color={COLORS.secondary.light}
          aria-labelledby="codepen"
          size={iconSize}
        />
      );
    case 'Medium':
      return (
        <FontAwesome.FaMedium
          color={COLORS.secondary.light}
          aria-labelledby="medium"
          size={iconSize}
        />
      );
    case 'LinkedIn':
      return (
        <FontAwesome.FaLinkedin
          color={COLORS.secondary.light}
          aria-labelledby="linkedin"
          size={iconSize}
        />
      );
    case 'Email':
      return (
        <FontAwesome.FaEnvelope
          color={COLORS.secondary.light}
          aria-labelledby="email"
          size={iconSize}
        />
      );
    default:
      return '';
  }
};

// Construct the social media links by mapping over the social array
const renderSocial = ({ name, link }: Social) => (
  <Icon key={name}>
    <Link href={link} target="_blank" rel="noopener noreferrer" role="button">
      {renderIcon(name)}
      <title id={name.toLowerCase()}>Link to {name}</title>
    </Link>
  </Icon>
);

const Footer = () => (
  <FooterWrapper>
    <FooterIcons>
      <IconList>
        {socials.map((social: Social) => renderSocial(social))}
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
      height: 20px;
      background-color: ${COLORS.lineColor};
      margin: 0 auto;
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
    margin-bottom: 0.5rem;
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
