const path = require('path');
const {
  name,
  shortName,
  title,
  description,
  themeColor,
  backgroundColor,
  siteUrl,
  logo,
  logoBig,
  author,
  type,
  googleAnalyticsID,
} = require('./data/site-config');

module.exports = {
  siteMetadata: {
    title,
    description,
    siteUrl,
    logo,
    author,
    type,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: googleAnalyticsID,
        head: true,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'siteData',
        path: path.join(__dirname, 'data'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gallery',
        path: path.join(__dirname, 'src/static/images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        short_name: shortName,
        start_url: '/',
        background_color: backgroundColor,
        theme_color: themeColor,
        display: 'minimal-ui',
        icon: logoBig,
      },
    },
    
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '' }],
      },
    },
  ],
}
