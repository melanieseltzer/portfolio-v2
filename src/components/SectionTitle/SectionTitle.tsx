import React from 'react';
import styled from 'styled-components';

// import { COLORS } from '../../constants';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => <H2>{title}</H2>;

export default Title;

const H2 = styled.h2``;
