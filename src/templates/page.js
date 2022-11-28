import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'

const Page = ({
  data: { page },
}) => {
  return (
    <Layout page={{ ...page.fields, ...page.frontmatter, ...{headings: page.headings} }}>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($path: String!) {
    page: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        keywords
      }
      headings(depth: h2) {
        id
        depth
        value
      }
      fields {
        edit_url
        slug
      }
    }
  }
`
