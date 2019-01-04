import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Posts from '../components/Posts';
import Projects from '../components/Projects';
import SEO from '../components/Seo';

export const GET_PROJECTS = graphql`
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
`;

const IndexPage = ({ data }: any) => {
  const { projects } = data.cms;

  return (
    <Layout>
      <SEO title="Home" />
      <Projects projects={projects} />
      <Posts />
    </Layout>
  );
};

export default IndexPage;
