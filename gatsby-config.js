module.exports = {
  siteMetadata: {
    title: 'CSV for Node.js',
    siteUrl: `https://csv.js.org`,
  },
  plugins: [
    // Fix https://github.com/gatsbyjs/gatsby/issues/2049
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-glamor`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-toc-patched',
            options: {
              header: 'Table of Contents', // the custom header text
              include: [
                '**/*.md', // an include glob to match against
              ],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '±',
              aliases: {},
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '24', // <600: 48; >600:64
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: false,
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-1322093-7',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'node-csv',
        short_name: 'csv',
        start_url: '/',
        background_color: '#445353',
        theme_color: '#445353',
        display: 'minimal-ui',
        icon: 'src/images/csv-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
  ],
}
