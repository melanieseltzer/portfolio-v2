import React, { ReactNode } from 'react';
import styled from 'styled-components';

import SectionTitle from '../SectionTitle';

import { container } from '../../constants';

interface Props {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: Props) => (
  <SectionStyled>
    <SectionTitle title={title} />
    {children}
  </SectionStyled>
);

export default Section;

const SectionStyled = styled.section`
  ${container}
`;
