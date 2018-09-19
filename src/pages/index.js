import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layout'

const IndexPage = () => (
  <Layout
    page={{
      title: 'Node.js CSV package',
      description: 'CSV generation, parsing, transformation and serialization for Node.js',
      keywords: 'csv, node.js, stream, parser, serializer, generation, transformation'
    }}
  >
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
