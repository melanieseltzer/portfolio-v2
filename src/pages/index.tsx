import React from 'react';

import About from '../components/About';
import Layout from '../components/Layout';
// import Posts from '../components/Posts';
import Projects from '../components/Projects';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Projects />
    {/* <Posts /> */}
    <About />
  </Layout>
);

export default IndexPage;
