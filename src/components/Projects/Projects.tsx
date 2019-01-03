import React from 'react';
// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';
import styled from 'styled-components';

import Project from '../Project';
import Section from '../Section';

// const GET_PROJECTS = gql`
//   query {
//     projects(orderBy: createdAt_DESC, where: { status: PUBLISHED }) {
//       id
//       title
//       description
//       githubLink
//       liveLink
//       tags
//     }
//   }
// `;

const Projects = () => (
  <Section title="Projects">
    <ProjectsWrapper>
      {/* <Query query={GET_PROJECTS}>
        {({ loading, error, data }) => {
          // Handle loading/error state
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error fetching projects :(</div>;

          // Handle no projects at all
          if (data.projects.length === 0)
            return <div>No projects yet. Check back soon!</div>;

          // If projects are returned then map over each one and render
          return data.projects.map(project => (
            <Project key={project.id} project={project} />
          ));
        }}
      </Query> */}
      <Project
        key="test"
        project={{
          title: 'This is an example of a really long title',
          description: 'Recreating the SNES controller with pure CSS.',
          githubLink: 'https://github.com',
          liveLink: 'https://test.com',
          tags: ['React', 'Gatsby']
        }}
      />
      <Project
        key="test"
        project={{
          title: 'Portfolio of Sara Diercks',
          description: 'Recreating the SNES controller with pure CSS.',
          githubLink: 'https://github.com',
          liveLink: 'https://test.com',
          tags: ['Nextjs', 'GraphCMS']
        }}
      />
    </ProjectsWrapper>
  </Section>
);

export default Projects;

const ProjectsWrapper = styled.div``;
