import { css } from 'styled-components';

// Colors
export const COLORS = {
  primary: { light: '#F7F8FE', dark: '#5c75f6' },
  secondary: { lightest: '#EBEDF2', light: '#595c62', dark: '#262626' },
  white: '#FFF'
};

// Breakpoints and sizes
export const maxWidth = '900px';

// For containers
export const container = css`
  margin: 20px 20px;
  max-width: ${maxWidth};
  @media (min-width: 1024px) {
    margin: 50px auto;
  }
`;
