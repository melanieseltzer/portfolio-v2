import { css } from 'styled-components';

// Colors
export const COLORS = {
  primary: { light: '#F7F8FE', dark: '#4763F5' },
  secondary: { lightest: '#EBEDF2', light: '#57595F', dark: '#262626' },
  accent: { blue: '#21d4fd', purple: '#b721ff' },
  white: '#FFF'
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
