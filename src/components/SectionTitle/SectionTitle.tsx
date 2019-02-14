import React from 'react';
import styled, { css } from 'styled-components';
import { FiBookOpen, FiPackage, FiStar } from 'react-icons/fi';

import { COLORS } from '../../constants';

interface Props {
  title: string;
}

// Render an icon depending on page section
const renderIcon = (title: string) => {
  const iconSize = '0.9em';

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
  display: inline-block;
  align-items: center;
  font-size: 1.4rem;
  font-style: italic;
  font-weight: 400;
  position: relative;
  svg {
    padding-top: 2px;
  }
  &:before,
  &:after {
    content: '';
    background-color: ${COLORS.lineColor};
    display: inline-block;
    height: 1px;
    position: absolute;
    top: 50%;
    width: 2rem;
  }
  &:before {
    left: -55px;
  }
  &:after {
    right: -55px;
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
