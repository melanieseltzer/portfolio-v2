module.exports = {
  siteMetadata: {
    title: 'Portfolio of Melanie Seltzer',
    description:
      'The development portfolio of Melanie Seltzer, showcasing projects and overall experience.',
    keywords: ['portfolio, react, gatsby'],
    author: 'Melanie Seltzer'
  },
  plugins: [
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
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['lato:400', 'lora:400,400i,700']
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
