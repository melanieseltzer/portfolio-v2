import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SVG = () => (
  <SVGStyled viewBox="0 0 500 150" preserveAspectRatio="none">
    <Path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" />
  </SVGStyled>
);

export default SVG;

const SVGStyled = styled.svg`
  height: 100%;
  width: 100%;
`;

const Path = styled.path`
  stroke: none;
  fill: ${COLORS.gray.light};
`;
