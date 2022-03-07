module.exports = {
  siteMetadata: {
    title: "CSV for Node.js",
    siteUrl: "https://csv.js.org",
  },
  plugins: [{
      resolve: "gatsby-plugin-react-helmet",
    }, {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: process.env.NODE_ENV === 'production' ? false : true,
        autoLabel: 'never', // 'dev-only' ∣ 'always' ∣ 'never'
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/md`,
        name: "markdown-pages",
      },
    }, {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [{
          resolve: "gatsby-remark-snippet-url-prepare",
          options: {}
        }, {
          resolve: "gatsby-remark-toc-patched",
          options: {
            header: "Table of Contents", // the custom header text
            include: [
              "**/*.md", // an include glob to match against
            ],
          },
        }, {
          resolve: "gatsby-remark-embed-snippet",
          options: {
            directory: `${__dirname}/csv/`
          }
        }, {
          resolve: "gatsby-remark-prismjs",
          options: {
            classPrefix: "language-",
            inlineCodeMarker: "±",
            aliases: {},
          },
        }, {
          resolve: "gatsby-remark-snippet-url",
          options: {
            message: './{{FILE}}',
            url: 'https://github.com/adaltas/node-csv/blob/master/{{FILE}}'
          }
        }, {
          resolve: "gatsby-remark-autolink-headers",
          options: {
            offsetY: "24", // <600: 48; >600:64
          },
        }],
      },
    }, {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
        omitGoogleFont: false,
      },
    }, {
      resolve: "gatsby-plugin-catch-links",
    }, {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-1322093-7",
      },
    }, {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "node-csv",
        short_name: "csv",
        start_url: "/",
        background_color: "#445353",
        theme_color: "#445353",
        display: "minimal-ui",
        icon: "src/images/csv-icon.png", // This path is relative to the root of the site.
      },
    }, {
      resolve: "gatsby-plugin-offline",
    }, {
      resolve: "gatsby-plugin-sitemap",
    }, {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://csv.js.org",
        sitemap: "https://csv.js.org/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    // {
    //   resolve: "gatsby-plugin-plausible",
    //   options: {
    //    domain: "csv.js.org",
    //  },
    // }
  ],
}
