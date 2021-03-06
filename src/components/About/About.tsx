import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

import { COLORS } from '../../constants';

const About = () => (
  <Section title="About">
    <AboutWrapper>
      <p>
        I'm a developer with 8+ years industry experience, currently working
        remotely on the payments team at GoDaddy. I enjoy creating clean,
        intuitive and performant sites and apps, and over my career have worked
        with a variety of technologies across the stack. I enjoy tinkering and
        love contributing to open source.
      </p>

      <p>
        I'm from Australia{' '}
        <span role="img" aria-label="australian flag">
          🇦🇺
        </span>{' '}
        and am currently living in Portland, OR with my wife and our pet cat,
        Callie. When I'm not coding, you can probably find me playing video
        games, hiking, traveling somewhere new, wasting copious amounts of time
        on Reddit, or playing with (annoying) Callie.
      </p>
    </AboutWrapper>
  </Section>
);

export default About;

const AboutWrapper = styled.div`
  p {
    margin: 0 0 1rem 0;
    color: ${COLORS.secondary.light};
  }
`;
