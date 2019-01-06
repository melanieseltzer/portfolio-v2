import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section title="404: Not Found">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Layout>
);

export default NotFoundPage;
