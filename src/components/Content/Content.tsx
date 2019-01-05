import React from 'react';
import ReactMarkdown from 'react-markdown';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { FiCode } from 'react-icons/fi';
import styled, { css } from 'styled-components';

import { COLORS, mediumUsername, SharedLinkStyles } from '../../constants';

export interface ContentType {
  title: string;
  description?: string;
  githubLink?: string;
  liveLink?: string;
  tags: string[];
  slug?: string;
}

type IsPost = {
  isPost: boolean;
};

// A versatile component that renders both projects and posts. The data is passed in
// from GraphQL queries (projects are sourced from GraphCMS and posts from Medium.com).
const Content = ({
  title,
  description,
  githubLink,
  liveLink,
  tags,
  slug
}: ContentType) => (
  // If there's a slug then it's a post, so need to do some styling with isPost
  <ContentWrapper isPost={!!slug}>
    <ContentHeader>
      {slug ? (
        <Link
          href={`https://medium.com/${mediumUsername}/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title>{title}</Title>
        </Link>
      ) : (
        <Title>{title}</Title>
      )}
      <Tags isPost={!!slug}>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </ContentHeader>

    {description && (
      <Description>
        <ReactMarkdown source={description} />
      </Description>
    )}

    <Links>
      {liveLink && (
        <ContentLink href={liveLink} target="_blank" rel="noopener noreferrer">
          Live <IconLive size="1.2rem" />
        </ContentLink>
      )}
      {githubLink && (
        <ContentLink
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code <IconCode size="1.2rem" />
        </ContentLink>
      )}
    </Links>
  </ContentWrapper>
);

export default Content;

const ContentWrapper = styled.div`
  margin: ${({ isPost }: IsPost) => (isPost ? '0 0 1.5rem 0' : '0 0 4rem 0')};
`;

const ContentHeader = styled.div`
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
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`;

const Link = styled.a`
  ${SharedLinkStyles}
`;

const Description = styled.div`
  color: ${COLORS.secondary.light};
  font-weight: 400;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  a {
    color: ${COLORS.secondary.dark};
    padding-bottom: 2px;
    ${SharedLinkStyles}
  }
`;

const Tags = styled.div`
  margin-top: ${({ isPost }: IsPost) => (isPost ? '1rem' : '0.5rem')};
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

const ContentLink = styled.a`
  display: inline-block;
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  color: ${COLORS.secondary.dark};
  margin-right: 1rem;
  padding-bottom: 2px;
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

const IconCode = styled(FiCode)`
  ${sharedIconStyles}
`;
