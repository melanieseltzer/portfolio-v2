import React, { ReactNode } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Header from '../Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
);

export default Layout;
