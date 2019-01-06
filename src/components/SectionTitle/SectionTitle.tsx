import React from 'react';
import styled, { css } from 'styled-components';
import { FiBookOpen, FiPackage } from 'react-icons/fi';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => (
  <H2>
    {title === 'Projects' ? (
      <IconProjects size="1em" />
    ) : (
      <IconPosts size="1em" />
    )}
    {title}
  </H2>
);

export default Title;

const H2 = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 3rem;
  position: relative;
  &:before {
    content: '';
    width: 4rem;
    height: 1px;
    background-color: #9ca2b7;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -70px;
  }
  @media (min-width: 1024px) {
    &:before {
      left: -80px;
    }
  }
`;

const SharedIconStyle = css`
  color: #666;
  margin: 0 13px 0 0;
`;

const IconProjects = styled(FiPackage)`
  ${SharedIconStyle}
`;

const IconPosts = styled(FiBookOpen)`
  ${SharedIconStyle}
`;
