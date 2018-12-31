import React, { ReactNode } from 'react';
import styled from 'styled-components';

import SectionTitle from '../SectionTitle';

// import { COLORS, maxWidth } from '../../constants';

interface Props {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: Props) => (
  <SectionWrapper>
    <Container>
      <SectionTitle title={title} />
      {children}
    </Container>
  </SectionWrapper>
);

export default Section;

const SectionWrapper = styled.section``;

const Container = styled.div``;
