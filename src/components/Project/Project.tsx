import React from 'react';
import styled, { css } from 'styled-components';
// import Markdown from 'react-markdown';
import { IoLogoGithub, IoMdArrowRoundForward } from 'react-icons/io';

import { COLORS } from '../../constants';

interface Props {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  tags: string[];
}

interface Project {
  project: Props;
}

const Project = ({ project }: Project) => (
  <ProjectWrapper>
    {/* title, description, github link, live link, tags */}
    <ProjectHeader>
      <Title>{project.title}</Title>
      <Tags>
        <Tag>{project.tags[0]}</Tag>
        <Tag>{project.tags[1]}</Tag>
      </Tags>
    </ProjectHeader>

    <Description>{project.description}</Description>

    <Links>
      {project.liveLink && (
        <ProjectLink
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live <IconLive size="1rem" />
        </ProjectLink>
      )}
      <ProjectLink
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Code <IconCode size="1rem" />
      </ProjectLink>
    </Links>
  </ProjectWrapper>
);

export default Project;

const ProjectWrapper = styled.div`
  margin-bottom: 3rem;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  margin-bottom: 1rem;
  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.7rem;
  }
`;

const Description = styled.p`
  color: ${COLORS.secondary.light};
  font-weight: 400;
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;

const Tags = styled.div`
  margin-top: 0.8rem;
  @media (min-width: 500px) {
    margin-top: 0;
  }
`;

const Tag = styled.span`
  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: ${COLORS.primary.dark};
  padding: 0.5em;
  background-color: ${COLORS.primary.light};
  border-radius: 3px;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  @media (min-width: 500px) {
    margin-left: 0.5rem;
  }
`;

const Links = styled.div`
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  font-family: 'Rubik', sans-serif;
  font-size: 1.2rem;
  color: ${COLORS.secondary.dark};
  margin-right: 1rem;
  padding-bottom: 3px;
  text-decoration: none;
`;

const sharedIconStyles = css`
  color: ${COLORS.secondary.dark};
  margin-left: 5px;
  margin-top: 5px;
`;

const IconLive = styled(IoMdArrowRoundForward)`
  ${sharedIconStyles}
`;

const IconCode = styled(IoLogoGithub)`
  ${sharedIconStyles}
`;
