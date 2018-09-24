import React from 'react'
import Layout from '../layout'

const NotFoundPage = () => (
  <Layout
    page={{
      title: 'Page not found',
      description: 'The requested page does not exist',
      keywords: 'csv, node.js, 404, not found'
    }}
  >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
