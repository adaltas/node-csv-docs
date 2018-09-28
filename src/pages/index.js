import React, { Component } from 'react'
import { Link } from 'gatsby'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
// Local
import Layout from '../layout'

// Syntax
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light'
import javascript from 'react-syntax-highlighter/languages/prism/javascript'
import { tomorrow } from 'react-syntax-highlighter/styles/prism'
registerLanguage('javascript', javascript)
const codeString = `
// Import the package main module
const csv = require('..')
// Use the module
csv
// Generate 20 records
.generate({
  delimiter: '|',
  length: 20
})
// Parse the records
.pipe(csv.parse({
  delimiter: '|'
}))
// Transform each value into uppercase
.pipe(csv.transform(function(record){
   return record.map(function(value){
     return value.toUpperCase()
   });
}))
// Convert the object into a stream
.pipe(csv.stringify({
  quoted: true
}))
// Print the CSV stream to stdout
.pipe(process.stdout)
`.trim()

class Index extends Component {
  style = {
    projects: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      // padding: '0 20px',
      borderRadius: '.6rem',
      marginBottom: '4%',
      flex: '0 0 48%',
      [TABLET_MEDIA_QUERY]: {
        // width: '50%',
        flex: '0 0 100%',
      },
      backgroundColor: 'rgba(255,255,255,.1)',
      padding: '1rem 2rem',
      textAlign: 'center',
      '& h1, & img': {
        marginTop: '0',
        marginBottom: '.5rem',
      },
      '& p': {
        marginBottom: '0',
      },
    },
  }
  render() {
    const { style } = this
    return (
      <Layout
        intro={true}
        page={{
          title: 'Node.js CSV package',
          description:
            'CSV generation, parsing, transformation and serialization for Node.js',
          keywords:
            'csv, node.js, stream, parser, serializer, generation, transformation',
        }}
      >
        <div css={style.projects}>
          <div css={style.card}>
            <h1>csv-generate</h1>
            <a
              href="https://npmjs.org/package/csv-generate"
              title="View this project on NPM"
            >
              <img
                src="https://img.shields.io/npm/v/csv-generate.svg"
                alt="NPM version"
              />
            </a>{' '}
            <a
              href="https://travis-ci.org/#!/adaltas/node-csv-generate"
              title="View this project on Travis"
              rel="noopener"
              target="_blank"
            >
              <img
                src="https://api.travis-ci.org/adaltas/node-csv-generate.svg"
                alt="Travis build status"
              />
            </a>
            <p>Write random and user-defined strings, objects and arrays</p>
          </div>
          <div css={style.card}>
            <h1>csv-parse</h1>
            <a
              href="https://npmjs.org/package/csv-parse"
              title="View this project on NPM"
              rel="noopener"
              target="_blank"
            >
              <img
                src="https://img.shields.io/npm/v/csv-parse.svg"
                alt="NPM version"
              />
            </a>{' '}
            <a
              href="https://travis-ci.org/#!/adaltas/node-csv-parse"
              title="View this project on Travis"
              rel="noopener"
              target="_blank"
            >
              <img
                src="https://api.travis-ci.org/adaltas/node-csv-parse.svg"
                alt="Travis build status"
              />
            </a>
            <p>Read CSV strings and buffers and write object and arrays</p>
          </div>
          <div css={style.card}>
            <h1>stream-transform</h1>
            <a
              href="https://npmjs.org/package/stream-transform"
              title="View this project on NPM"
              rel="noopener"
              target="_blank"
            >
              <img
                src="https://img.shields.io/npm/v/stream-transform.svg"
                alt="NPM version"
              />
            </a>{' '}
            <a
              href="https://travis-ci.org/#!/adaltas/node-stream-transform"
              title="View this project on Travis"
              rel="noopener"
              target="_blank"
            >
              <img
                src="https://api.travis-ci.org/adaltas/node-stream-transform.svg"
                alt="Travis build status"
              />
            </a>
            <p>Read and write objects and arrays</p>
          </div>
          <div css={style.card}>
            <h1>csv-stringify</h1>
            <a
              href="https://npmjs.org/package/csv-stringify"
              title="View this project on NPM"
              rel="noopener"
              target="_blank"
            >
              <img
                src="https://img.shields.io/npm/v/csv-stringify.svg"
                alt="NPM version"
              />
            </a>{' '}
            <a
              href="https://travis-ci.org/#!/adaltas/node-csv-stringify"
              title="View this project on Travis"
              rel="noopener"
              target="_blank"
            >
              <img
                src="https://api.travis-ci.org/adaltas/node-csv-stringify.svg"
                alt="Travis build status"
              />
            </a>
            <p>Read object and arrays and write CSV strings</p>
          </div>
        </div>
        <h1>Quick Example</h1>
        <SyntaxHighlighter language="javascript" style={tomorrow}>
          {codeString}
        </SyntaxHighlighter>
      </Layout>
    )
  }
}

export default Index
