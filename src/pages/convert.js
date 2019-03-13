import React, { Component } from 'react'
import { Link } from 'gatsby'
// Local
import Layout from '../layout'
import Convert from '../components/Convert'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'input',
      options: {},
      input: ''
    }
  }
  render() {
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
        <h1>Convert data between CSV and JSON</h1>
        <p>
          This is a full-featured CSV parsing tool running entirely on your browser. 
          No data leave your computer ! 
          Use it also to learn how to use our packages and to test the various options interactively.
        </p>
        <Convert />
      </Layout>
    )
  }
}

export default Index
