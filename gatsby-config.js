/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Portfolio of Melanie Seltzer',
    description:
      'The development portfolio of Melanie Seltzer, showcasing projects and overall experience.',
    keywords: ['portfolio, react, gatsby'],
    author: 'Melanie Seltzer'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.melanieseltzer.com'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'melanie-seltzer-portfolio',
        short_name: 'melanie',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik:400', 'Lora:400,400i,700']
        }
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'cms',
        url:
          'https://api-uswest.graphcms.com/v1/cjqg22g5m13h901btfhl4juf1/master',
        refetchInterval: 10
      }
    },
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: `@melanieseltzer`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
