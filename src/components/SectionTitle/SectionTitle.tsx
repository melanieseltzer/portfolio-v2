import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => <H2>{title}</H2>;

export default Title;

const H2 = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 3rem;
  position: relative;
  &:before {
    content: '';
    width: 2.5rem;
    height: 1px;
    background-color: ${COLORS.gray.dark};
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -50px;
  }
`;
