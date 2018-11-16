import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  TABLET_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
// Local
import bck from '../images/footer_bck.svg'

class Footer extends Component {
  styles = {
    root: {
      background: `url(${bck})`,
      backgroundSize: 'cover',
      borderTop: '.1rem solid #FFF',
      marginTop: '3rem',
      padding: '2rem 0',
    },
    container: {
      maxWidth: 800,
      [TABLET_MEDIA_QUERY]: {
        padding: '0 1rem',
      },
      [MIN_TABLET_MEDIA_QUERY]: {
        padding: '0 1rem 0 3rem',
        boxSizing: 'content-box',
      },
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 auto',
      // '@media (max-width: 960px)': {
      //   margin: '0 1rem',
      // },
      // '@media (min-width: 960px)': {
      //   margin: '0 2rem 0 15%',
      //   textAlign: 'justify',
      // },
      '& h1': {
        margin: '1rem 0 .5rem 0',
        // fontWeight: 'normal',
        fontSize: '1.4rem',
        // textAlign: 'left',
      },
      '& ul, & p': {
        margin: '0 0 0 0',
      },
      '& li': {
        margin: 0,
        textIndent: 0,
        listStyleType: 'none',
      },
      '& a': {
        textDecoration: 'none',
        // color: 'hsla(0,0%,0%,0.8)',
        // ':hover': {
        //   color: '#34BF1C',
        // },
      },
      '& p a': {
        textDecoration: 'underline',
      },
    },
    navigate: {
      // width: '25%',
      flex: '1',
      '@media (max-width: 960px)': {
        // width: '50%',
        flex: '0 0 50%',
      },
    },
    contribute: {
      // width: '25%',
      flex: '1',
      '@media (max-width: 960px)': {
        // width: '50%',
        flex: '0 0 50%',
      },
    },
    about: {
      // width: '100%',
      flex: '2',
      '@media (max-width: 960px)': {
        // width: '100%',
        flex: '0 0 100%',
      },
    },
  }
  render() {
    const { styles } = this
    return (
      <footer css={styles.root}>
        <div css={styles.container}>
          <nav css={styles.navigate}>
            <h1>Navigate</h1>
            <ul>
              <li>
                <Link to="/generate/">Generate</Link>
              </li>
              <li>
                <Link to="/parse/">Parse</Link>
              </li>
              <li>
                <Link to="/transform/">Transform</Link>
              </li>
              <li>
                <Link to="/stringify/">Stringify</Link>
              </li>
            </ul>
          </nav>
          <nav css={styles.contribute}>
            <h1>Contribute</h1>
            <ul>
              <li>
                <Link to="/project/contribute/">How to contribute</Link>
              </li>
              <li>
                <a
                  href="https://github.com/adaltas/node-csv"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/adaltas/node-csv/issues"
                  target="_blank"
                  rel="noopener"
                >
                  Issue Tracker
                </a>
              </li>
              <li>
                <Link to="/project/license/">License</Link>
              </li>
            </ul>
          </nav>
          <div css={styles.about}>
            <h1>About</h1>
            <p>
              The Node.js CSV project is an open source product hosted on{' '}
              <a href="https://www.github.com" target="_blank" rel="noopener">
                GitHub
              </a>{' '}
              and developed by{' '}
              <a href="http://www.adaltas.com" target="_blank" rel="noopener">
                Adaltas
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
