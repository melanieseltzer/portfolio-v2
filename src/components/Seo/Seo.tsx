import React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

// @ts-ignore
import favicon from '../../images/favicon.ico';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
      }
    }
  }
`;

interface Props {
  title: string;
  description?: string;
  lang?: string;
  keywords?: string[];
}

function SEO({ title, description, lang = 'en', keywords = [] }: Props) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaKeywords =
          keywords.join(', ') || data.site.siteMetadata.keywords.join(', ');

        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                name: 'keywords',
                content: metaKeywords
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]}
            link={[{ rel: 'icon', type: 'image/ico', href: `${favicon}` }]}
          />
        );
      }}
    />
  );
}

export default SEO;
