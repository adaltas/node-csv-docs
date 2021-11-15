import React from 'react'
import { Link } from 'gatsby'
import {
  MIN_TABLET_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
// Local
import Layout from '../layout'
import convert_icon from '../images/convert.svg'

// Syntax
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
SyntaxHighlighter.registerLanguage('javascript', javascript)

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
  convert: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    background: `#08797e`,
    borderRadius: '.6rem',
    padding: '1rem',
    marginBottom: '4%',
    '& span': {
      display: 'inline-block',
    },
    '& img': {
      margin: '0 1rem 0 0',
      width: '6rem',
      height: '6rem',
    },
    '& h1': {
      color: '#fff',
      margin: '0 0 .4rem 0',
    },
    '& p': {
      // display: 'inline',
      color: '#fff',
      margin: 0,
    },
  },
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
    '& h1': {
      textAlign: 'center',
    },
    '& h2': {
      margin: '.5rem 0',
    },
    '& h2 a': {
      textDecoration: 'none !important',
    },
    '& p': {
      [MIN_TABLET_MEDIA_QUERY]: {
        textAlign: 'justify',
      },
    }
  },
  blog_info: {
    fontSize: '.9rem',
    // fontStyle: 'italic',
    // opacity: '.6',
    fontColor: "rgba(255,255,255,.6)",
    margin: '0',
  },
  sample: {
    '& h1': {
      textAlign: 'center',
    }
  }
}

const Index = () => (
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
        >
          <img
            src="https://img.shields.io/npm/v/csv-parse.svg"
            alt="NPM version"
          />
        </a>{' '}
        <a
          href="https://travis-ci.org/#!/adaltas/node-csv-parse"
          title="View this project on Travis"
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
        >
          <img
            src="https://img.shields.io/npm/v/stream-transform.svg"
            alt="NPM version"
          />
        </a>{' '}
        <a
          href="https://travis-ci.org/#!/adaltas/node-stream-transform"
          title="View this project on Travis"
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
        >
          <img
            src="https://img.shields.io/npm/v/csv-stringify.svg"
            alt="NPM version"
          />
        </a>{' '}
        <a
          href="https://travis-ci.org/#!/adaltas/node-csv-stringify"
          title="View this project on Travis"
        >
          <img
            src="https://api.travis-ci.org/adaltas/node-csv-stringify.svg"
            alt="Travis build status"
          />
        </a>
        <p>Read object and arrays and write CSV strings</p>
      </div>
    </section>
      <section css={styles.convert}>
        <div>
          <h1><Link to="/convert/"><span>CSV & JSON</span> <span>convertor tool</span></Link></h1>
          <p>
            This is a full-featured CSV parsing tool running entirely on your browser. 
            No data leave your computer ! 
            Use it also to learn how to use our packages and to test the various options interactively.
          </p>
        </div>
        <img src={convert_icon} alt="Convertor tool" />
      </section>
    <section css={styles.blog}>
      <h1>Latest news</h1>
      <article>
        <h2>
          <a
            href="https://www.adaltas.com/en/2021/11/15/csv-version-6/"
            alt="CSV package version 6.0.0 with ECMAScript modules support"
          >
            CSV package version 6 with ECMAScript modules support
          </a>
        </h2>
        <p css={styles.blog_info}>
          {"By "}
          <a href='https://www.adaltas.com/en/author/david/'>wdavidw</a>
          {" | November 13th, 2021"}
        </p>
        <p>
          Version 6 of the <a href="https://csv.js.org/"  alt="CSV project">csv package</a> for
          Node.js is released along its sub projects. <a
          href="https://www.adaltas.com/en/2021/11/15/csv-version-6/" alt="Node.js CSV 6 announcement">Read about the new features and the
          breaking changes</a> (<a href="https://www.adaltas.com/fr/2021/11/15/csv-version-6/" alt="French announcement">fr</a>) introduced by this new version.
        </p>
      </article>
      <article>
        <h2>
          <a
            href="https://www.adaltas.com/en/2021/05/21/js-monorepos-merging-git-repositories/"
            alt="Merging Git repositories and preserve commit history"
          >
            Migrating all the projects as one Git monorepo.
          </a>
        </h2>
        <p css={styles.blog_info}>
          {"By "}
          <a href='https://www.adaltas.com/'>wdavidw</a>
          {" | August 27th, 2021"}
        </p>
        <p>
          A few weeks ago, we migrated the 5 repositories in one Git monorepo. If
          interested in the details, read our article on how we <a
          href="https://www.adaltas.com/en/2021/05/21/js-monorepos-merging-git-repositories/"
          alt="Git monorepo">merged the repositories</a> while preserving the
          commit history.
        </p>
      </article>
      <article>
        <h2>
          <Link
            to="/convert/"
          >
            Try the new CSV & JSON conversion tool!
          </Link>
        </h2>
        <p css={styles.blog_info}>
          {"By "}
          <a href='https://www.adaltas.com/'>wdavidw</a>
          {" | January 15th, 2019"}
        </p>
        <p>
          We just published a new conversion tool which takes a CSV input 
          and convert it to JSON. Use it as a playground to learn how to 
          use our packages, test your options interactively or as a 
          full-featured CSV parsing tool.
        </p>
      </article>
      <article>
        <h2>
          <Link
            to="/stringify/changelog/"
          >
            CSV Stringify 5.1.0
          </Link>
        </h2>
        <p css={styles.blog_info}>
          {"By "}
          <a href='https://github.com/wdavidw/'>wdavidw</a>
          {" | December 5th, 2018"}
        </p>
        <p>
          <Link to="/stringify/options/cast/">Casting user functions</Link> are 
          now called with a context object. The initial properties are 
          "column", "header", "index", "records".
        </p>
      </article>
      <article>
        <h2>
          <Link
            to="/project/changelog/"
          >
            CSV 5.0.0
          </Link>
        </h2>
        <p css={styles.blog_info}>
          {"By "}
          <a href='https://github.com/wdavidw/'>wdavidw</a>
          {" | November 21th, 2018"}
        </p>
        <p>
          Version 5.0.0 includes the latest csv-parse and csv-stringify 
          respectively with version 4.0.1 and 5.0.0.
        </p>
      </article>
      <article>
        <h2>
          <Link
            to="/stringify/changelog/"
          >
            CSV Stringify 5.0.0
          </Link>
        </h2>
        <p css={styles.blog_info}>
          {"By "}
          <a href='https://github.com/wdavidw/'>wdavidw</a>
          {" | November 21th, 2018"}
        </p>
        <p>
          Version 5.0.0 introduces the new <code className="language-text">quoted_match</code> option and support 
          options written both in the underscore and camelcase forms. Some 
          options were renamed. Thus <code className="language-text">rowDelimiter</code> is 
          now <code className="language-text">record_delimiter</code> and <code className="language-text">formatters</code> is now <code className="language-text">cast</code>. <Link to="/stringify/changelog/">Read the changelog!</Link>
        </p>
      </article>
      <article>
        <h2>
          <a
            href="https://www.adaltas.com/en/2018/11/19/nodejs-csv-version-4-performance/"
          >
            CSV Parse 4.0.0 - re-writing and performance
          </a>
        </h2>
        <p css={styles.blog_info}>
          {"By "}
          <a href='https://github.com/wdavidw/'>wdavidw</a>
          {" | November 19th, 2018"}
        </p>
        <p>
          Version 4.0.0 is a complete re-writing of the project focusing on 
          performance. It also comes with new functionalities as well as 
          some cleanup in the option properties and the exported 
          information. The official website is updated and 
          the <Link to="/parse/changelog/">changelog</Link> contains the 
          list of changes for this major release. <a
          href="https://www.adaltas.com/en/2018/11/19/nodejs-csv-version-4-performance/">Learn more!</a>
        </p>
      </article>
    </section>
    <section css={styles.sample}>
      <h1>Quick Example</h1>
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>
    </section>
  </Layout>
)

export default Index
