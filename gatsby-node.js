const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    node.frontmatter.disabled = !!node.frontmatter.disabled
    slug = createFilePath({ node, getNode, basePath: `pages` })
    edit_url =
      'https://github.com/adaltas/node-csv-docs/edit/master/src/md/' + 
      path.relative(path.resolve('src/md'), node.fileAbsolutePath)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `edit_url`,
      value: edit_url,
    })
    createNodeField({
      node,
      name: `redirects`,
      value: node.frontmatter.redirects || [],
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: {frontmatter: {sort: DESC}}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              disabled
            }
            fields {
              slug
              redirects
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.disabled) return
      createPage({
        path: node.fields.slug,
        component: pageTemplate,
        context: {}, // additional data can be passed via context
      })
      if (node.fields.redirects) {
        node.fields.redirects.map(redirect => {
          createRedirect({
            fromPath: redirect,
            toPath: node.fields.slug,
            isPermanent: true,
            redirectInBrowser: true,
          })
        })
      }
    })
  })
}
