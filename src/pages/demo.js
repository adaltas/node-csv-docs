import React, { Component } from 'react'
import { Link } from 'gatsby'
// Local
import Layout from '../layout'

const styles = {
  
}

class Index extends Component {
  render() {
    const onClick = (e) =>
      console.log('click')
    return (
      <Layout
        page={{
          title: 'Node.js CSV demo',
          description:
            'CSV generation, parsing, transformation and serialization for Node.js',
          keywords:
            'csv, node.js, demo, parser, serializer, generation, transformation',
        }}
      >
        <button onClick={onClick}>ok</button>
      </Layout>
    )
  }
}

export default Index
