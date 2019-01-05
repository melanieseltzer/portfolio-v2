import React from 'react';

import Layout from '../components/Layout';
import Posts from '../components/Posts';
import Projects from '../components/Projects';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Projects />
    <Posts />
  </Layout>
);

export default IndexPage;
