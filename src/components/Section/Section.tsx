import React, { ReactNode } from 'react';
import styled from 'styled-components';

import SectionTitle from '../SectionTitle';

import { maxWidth } from '../../constants';

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
  margin: 0 20px 4rem 20px;
  max-width: ${maxWidth};
  @media (min-width: 1024px) {
    margin: 0 auto 80px auto;
  }
`;
