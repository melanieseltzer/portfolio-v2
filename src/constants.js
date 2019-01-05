import { css } from 'styled-components';

// Colors
export const COLORS = {
  primary: { light: '#F7F8FE', dark: '#4763F5' },
  secondary: { lightest: '#EBEDF2', light: '#595c62', dark: '#262626' },
  accent: { blue: '#21d4fd', purple: '#b721ff' },
  white: '#FFF'
};

// Breakpoints and sizes
export const maxWidth = '900px';

export const SharedLinkStyles = css`
  background: linear-gradient(
    to left,
    ${COLORS.accent.blue},
    ${COLORS.accent.purple}
  );
  background-size: 200% 3px;
  background-repeat: no-repeat;
  background-position: right bottom;
  transition: all 0.5s ease;
  &:hover {
    background-position: left bottom;
  }
`;
