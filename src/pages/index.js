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
const csv = require('csv')
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

const styles = {
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
    '& a': {
      textDecoration: 'none'
    },
    '& h1, & img': {
      marginTop: '0',
      marginBottom: '.5rem',
    },
    '& p': {
      marginBottom: '0',
    },
  },
  blog: {
    // backgroundColor: 'rgba(255,255,255,.1)',
    border: '.2rem solid rgba(255,255,255,.1)',
    padding: '.5rem 2rem',
    borderRadius: '.6rem',
    marginBottom: '4%',
    // '& article h1': {
    //   textAlign: 'left',
    //   fontSize: '1.4rem !important',
    //   '& a': {
    //     textDecoration: 'none !important',
    //   },
    // },
    // '& h1': {
    //   margin: '0',
    // },
    '& h1': {
      textAlign: 'center',
    },
    '& h2': {
      margin: '.5rem 0',
    },
    '& h2 a': {
      textDecoration: 'none !important',
    },
  }
}

class Index extends Component {
  render() {
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
        <section css={styles.projects}>
          <div css={styles.card}>
            <h1><Link to="/generate/">csv-generate</Link></h1>
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
          <div css={styles.card}>
            <h1><Link to="/parse/">csv-parse</Link></h1>
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
          <div css={styles.card}>
            <h1><Link to="/transform/">stream-transform</Link></h1>
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
          <div css={styles.card}>
            <h1><Link to="/stringify/">csv-stringify</Link></h1>
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
        </section>
        <section css={styles.blog}>
          <h1>Latest news</h1>
          <article>
            <h2>
              <a
                href="http://www.adaltas.com/en/2018/11/14/nodejs-csv-version-4-performance/"
              >
                CSV version 4 - re-writing and performance
              </a>
            </h2>
            <p>
              Version 4 is a complete re-writing of the project focusing on 
              performance. It also comes with new functionalities as well as 
              some cleanup in the option properties and the exported 
              information. The official website is updated and the changelog 
              contains the list of changes for this major release. <a
              href="http://www.adaltas.com/en/2018/11/14/nodejs-csv-version-4-performance/">Learn more!</a>
            </p>
          </article>
        </section>
        <h1>Quick Example</h1>
        <SyntaxHighlighter language="javascript" style={tomorrow}>
          {codeString}
        </SyntaxHighlighter>
      </Layout>
    )
  }
}

export default Index
