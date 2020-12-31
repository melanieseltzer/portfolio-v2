import { css } from 'styled-components';

// Colors
export const COLORS = {
  primary: { light: '#F7F8FE', dark: '#4763F5' },
  secondary: { lightest: '#F0F3F7', light: '#57595F', dark: '#262626' },
  accent: {
    blue: '#21d4fd',
    darkblue: '#4a00e0',
    purple: '#b721ff',
    darkpurple: '#6f00c3'
  },
  white: '#FFF',
  lineColor: '#9ca2b7'
};

// Breakpoints and sizes
export const maxWidth = '900px';

// Shared CSS
export const SharedLinkStyles = css`
  display: inline;
  background-image: linear-gradient(
    to left,
    ${COLORS.accent.blue},
    ${COLORS.accent.purple}
  );
  background-size: 200% 2px;
  background-repeat: no-repeat;
  background-position: right bottom;
  transition: all 0.5s ease;
  &:hover {
    background-position: left bottom;
  }
`;

// Random stuff
export const mediumUsername = 'melanieseltzer';

// Social media info for render in Footer component
export const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/melanieseltzer'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/melanieseltzer'
  },
  {
    name: 'Codepen',
    link: 'https://codepen.io/melanieseltzer'
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@melanieseltzer'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/melanieseltzer'
  },
  {
    name: 'Email',
    link: 'mailto:melanieseltzer1@gmail.com'
  }
];
