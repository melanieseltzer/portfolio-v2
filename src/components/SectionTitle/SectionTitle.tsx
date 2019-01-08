import React from 'react';
import styled, { css } from 'styled-components';
import { FiBookOpen, FiPackage, FiStar } from 'react-icons/fi';

interface Props {
  title: string;
}

// Render an icon depending on page section
const renderIcon = (title: string) => {
  const iconSize = '1em';

  switch (title) {
    case 'Projects':
      return <IconProjects size={iconSize} />;
    case 'Recent Posts':
      return <IconPosts size={iconSize} />;
    case 'About':
      return <IconAbout size={iconSize} />;
    default:
      return '';
  }
};

const Title = ({ title }: Props) => (
  <H2>
    {renderIcon(title)}
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
  margin-bottom: 2rem;
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

const IconAbout = styled(FiStar)`
  ${SharedIconStyle}
`;
