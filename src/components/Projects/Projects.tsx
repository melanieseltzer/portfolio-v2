import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import Content from '../Content';
import Section from '../Section';

export interface Project {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  tags: string[];
}

const Projects = () => (
  <Section title="Projects">
    <ProjectsWrapper>
      <StaticQuery
        query={graphql`
          query {
            cms {
              projects(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
                id
                title
                description
                githubLink
                liveLink
                tags
              }
            }
          }
        `}
        render={data => {
          if (!data.cms) {
            return <p>Loading...</p>;
          }
          return data.cms.projects.map((project: Project) => (
            <Content
              key={project.title}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              tags={project.tags}
            />
          ));
        }}
      />
    </ProjectsWrapper>
  </Section>
);

export default Projects;

const ProjectsWrapper = styled.div`
  margin: 3rem 0;
`;
