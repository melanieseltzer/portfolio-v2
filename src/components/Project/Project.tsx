import React from 'react';
import ReactMarkdown from 'react-markdown';
import { IoIosCode, IoMdArrowRoundForward } from 'react-icons/io';
import styled, { css } from 'styled-components';

import { COLORS, SharedLinkStyles } from '../../constants';
import { ProjectType } from '../../constants.d';

const Project = ({
  title,
  description,
  githubLink,
  liveLink,
  tags
}: ProjectType) => (
  <ProjectWrapper>
    <ProjectHeader>
      <Title>{title}</Title>
      <Tags>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </ProjectHeader>

    <Description>
      <ReactMarkdown source={description} />
    </Description>

    <Links>
      {liveLink && (
        <ProjectLink href={liveLink} target="_blank" rel="noopener noreferrer">
          Live <IconLive size="1.2rem" />
        </ProjectLink>
      )}
      <ProjectLink href={githubLink} target="_blank" rel="noopener noreferrer">
        Code <IconCode size="1.2rem" />
      </ProjectLink>
    </Links>
  </ProjectWrapper>
);

export default Project;

const ProjectWrapper = styled.div`
  margin: 3rem 0 0 0;
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
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 400;
`;

const Description = styled.p`
  color: ${COLORS.secondary.light};
  font-weight: 400;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  a {
    color: ${COLORS.secondary.dark};
    text-decoration: none;
    padding-bottom: 2px;
    ${SharedLinkStyles}
  }
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
  font-size: 1rem;
  color: ${COLORS.secondary.dark};
  margin-right: 1rem;
  padding-bottom: 2px;
  text-decoration: none;
  ${SharedLinkStyles}
`;

const sharedIconStyles = css`
  color: ${COLORS.secondary.dark};
  margin-left: 5px;
  vertical-align: middle;
  margin-bottom: 3px;
`;

const IconLive = styled(IoMdArrowRoundForward)`
  ${sharedIconStyles}
`;

const IconCode = styled(IoIosCode)`
  ${sharedIconStyles}
`;
