import { css } from 'styled-components';

// Colors
export const COLORS = {
  primary: { light: '', dark: '#5e79f2' },
  secondary: { light: '#fbaab1', dark: '#ff5f6d' },
  white: '#FFF',
  gray: {
    lightest: '#fdfdfd',
    light: '#EBEDF2',
    dark: '#262626'
  }
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
