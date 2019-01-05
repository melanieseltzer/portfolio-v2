import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import Project from '../Project';
import Section from '../Section';

import { ProjectType } from '../../constants.d';

const Projects = () => (
  <Section title="Projects">
    <ProjectsWrapper>
      <StaticQuery
        query={graphql`
          query {
            cms {
              projects(orderBy: createdAt_ASC, where: { status: PUBLISHED }) {
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
          return data.cms.projects.map((project: ProjectType) => (
            <Project
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

const ProjectsWrapper = styled.div``;
