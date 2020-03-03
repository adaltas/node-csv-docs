import React, { Component } from 'react'
// Local
import Layout from '../layout'
import Convert from '../components/Convert'

const Convertor = () => (
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

export default Convertor
