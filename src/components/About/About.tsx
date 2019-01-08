import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

import { COLORS } from '../../constants';

const Projects = () => (
  <Section title="About">
    <ProjectsWrapper>
      <p>
        I'm a web developer with 8 years indutry experience, currently working
        as lead developer at{' '}
        <Link
          href="http://still-water.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Still Water
        </Link>
        , primarily in the front-end. I enjoy creating clean, intuitive and
        performant sites and apps, and over my career have worked with a variety
        of technologies across the stack. I enjoy tinkering and love
        contributing to open source.
      </p>

      <p>
        I currently live in Los Angeles, CA with my wife and our pet cat,
        Callie. When I'm not coding, you can probably find me playing video
        games, hiking, traveling somewhere new, wasting copious amounts of time
        on Reddit, or playing with (annoying) Callie.
      </p>
    </ProjectsWrapper>
  </Section>
);

export default Projects;

const ProjectsWrapper = styled.div`
  p {
    color: ${COLORS.secondary.light};
  }
`;

const Link = styled.a`
  color: ${COLORS.primary.dark};
  &:hover {
    text-decoration: underline;
  }
`;
