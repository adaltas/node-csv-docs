import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {css} from 'glamor'
import ReactTooltip from 'react-tooltip'
import Button from '../components/Button'
// Prism
require('prismjs/themes/prism-tomorrow.css')

class Main extends Component {
  styles = {
    root: {
      maxWidth: 800,
      margin: '0 auto',
      // '@media (max-width: 960px)': {
      //   margin: '0 1rem',
      // },
      // '@media (min-width: 960px)': {
      //   margin: '0 2rem 0 15%',
      //   textAlign: 'justify',
      // },
      // '& :not(pre) > code[class*="language-"]': {
      //   padding: '.2em .3em .2em .3em',
      //   background: '#667575',
      //   color: '#fff',
      // },
    },
    tools: {
      float: 'right',
      // backgroundColor: '#fff',
      marginBottom: '1rem',
      // padding: '0 .4rem .4rem .4rem',
      // '@media (max-width: 960px)': {
      //   borderRadius: '0 0 1.8rem 1.8rem',
      // },
      // '@media (min-width: 960px)': {
      //   borderRadius: '0 0 1.4rem 1.4rem',
      // },
    },
    icon: {
      fill: '#9B9B9B',
      '@media (max-width: 960px)': {
        width: '1.4rem',
        height: '1.4rem',
      },
      '@media (min-width: 960px)': {
        width: '1.8rem',
        height: '1.8rem',
      },
    },
    button: {
      outline: 'none',
      '@media (max-width: 960px)': {
        width: '1.8rem !important',
        height: '1.8rem !important',
      },
      '@media (min-width: 960px)': {
        width: '2.4rem !important',
        height: '2.4rem !important',
      },
    },
    main: {
      clear: 'right',
      '& .toc': {
        // backgroundColor: '#fff',
        // padding: '5px 0',
        // display: 'none',
        '& h2': {
          marginTop: 0,
        },
        '& ul': {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    toc: {
      // backgroundColor: '#fff',
      // '& > div': {
      //   padding: '1rem',
      // },
      // '& h2': {
      //   marginTop: 0,
      // },
      // '& ul, & li': {
      //   marginTop: 0,
      //   marginBottom: 0,
      // },
    },
  }
  constructor (props) {
    super(props)
    this.content = React.createRef()
    this.toc = React.createRef()
  }
  render () {
    const {page, children} = this.props
    const {styles} = this
    const toggleToc = () => {
      if (!page) return
      const contentNode = ReactDom.findDOMNode(this.content.current)
      const tocNode = contentNode.querySelector('.toc')
      if (!tocNode) return
      const anchorNode = tocNode.querySelector('.anchor')
      if(anchorNode) anchorNode.remove()
      const display = window.getComputedStyle(tocNode).display
      this.toc.current.appendChild(tocNode)
      tocNode.style.display = display === 'none' ? 'block' : 'none'
    }
    return (
      <main ref={this.content} css={styles.root}>
        <div ref={this.toc} css={styles.toc}></div>
        <div css={styles.tools}>
          { page &&
            <Button
              color="inherit"
              aria-label="content-edit"
              data-for='content-tooltip'
              data-tip="Edit on GitHub"
              href={page.edit_url}
              target="_blank"
              rel="noopener"
              className={css(styles.button).toString()}
            >
              <svg viewBox="0 0 24 24" css={styles.icon}>
              	<path d="M14.06,9.02l0.92,0.92L5.92,19H5v-0.92L14.06,9.02 M17.66,3c-0.25,0-0.51,0.1-0.7,0.29l-1.83,1.83
              		l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C18.17,3.09,17.92,3,17.66,3L17.66,3z M14.06,6.19L3,17.25V21h3.75
              		L17.81,9.94L14.06,6.19L14.06,6.19z"/>
              </svg>
            </Button>
          }
          { page &&
            <Button
              color="inherit"
              aria-label="content-toc"
              data-for='content-tooltip'
              data-tip="Toggle table of content"
              onClick={toggleToc}
              className={css(styles.button).toString()}
            >
              <svg viewBox="0 0 24 24" css={styles.icon}>
              	<path fill="none" d="M0,0h24v24H0V0z"/>
              	<path fill="none" d="M0,0h24v24H0V0z"/>
              	<path d="M3,9h14V7H3V9z M3,13h14v-2H3V13z M3,17h14v-2H3V17z M19,17h2v-2h-2V17z M19,7v2h2V7H19z M19,13h2v-2h-2V13z"/>
              </svg>
            </Button>
          }
          <ReactTooltip id="content-tooltip" delayShow={300} place="bottom" effect="solid" />
        </div>
        <div css={styles.main}>
        {children}
        </div>
      </main>
    )
  }
} 

export default Main
