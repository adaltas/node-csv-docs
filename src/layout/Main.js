import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { css } from '@emotion/css'
import ReactTooltip from 'react-tooltip'
import Icon from '../components/Icon'
import {
  TABLET_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
// Prism
require('prismjs/themes/prism-tomorrow.css')

class Main extends Component {
  styles = {
    root: {
      maxWidth: 800,
      margin: '0 auto',
      [TABLET_MEDIA_QUERY]: {
        padding: '0 1rem',
      },
      [MIN_TABLET_MEDIA_QUERY]: {
        padding: '0 1rem 0 3rem',
        boxSizing: 'content-box',
      },
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
      backgroundColor: '#626F6F',
      marginBottom: '1rem',
      padding: '.4rem .4rem .4rem .4rem',
      '@media (max-width: 960px)': {
        borderRadius: '0 0 1.8rem 1.8rem',
      },
      '@media (min-width: 960px)': {
        borderRadius: '0 0 1.4rem 1.4rem',
      },
    },
    svg: {
      fill: '#fff',
      '@media (max-width: 960px)': {
        width: '1.4rem',
        height: '1.4rem',
      },
      '@media (min-width: 960px)': {
        width: '1.8rem',
        height: '1.8rem',
      },
    },
    icon: {
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
      marginTop: '2rem',
      // position: 'relative',
      [MIN_TABLET_MEDIA_QUERY]: {
        boxSizing: 'border-box',
      },
      clear: 'right',
      '& .toc': {
        // backgroundColor: '#fff',
        // padding: '5px 0',
        display: 'none',
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
      backgroundColor: '#626F6F',
      '& > div': {
        padding: '1rem',
      },
      '& h2': {
        marginTop: 0,
      },
      '& ul, & li': {
        marginTop: 0,
        marginBottom: 0,
      },
    },
  }
  constructor(props) {
    super(props)
    this.content = React.createRef()
    this.toc = React.createRef()
  }
  render() {
    const { page, children } = this.props
    const { styles } = this
    const toggleToc = () => {
      if (!page) return
      const contentNode = ReactDom.findDOMNode(this.content.current)
      const tocNode = contentNode.querySelector('.toc')
      if (!tocNode) return
      const anchorNode = tocNode.querySelector('.anchor')
      if (anchorNode) anchorNode.remove()
      const display = window.getComputedStyle(tocNode).display
      this.toc.current.appendChild(tocNode)
      tocNode.style.display = display === 'none' ? 'block' : 'none'
    }
    return (
      <main ref={this.content} css={styles.root}>
        <div ref={this.toc} css={styles.toc} />
        {page && page.edit_url &&
        <div css={styles.tools}>
          <Icon
            color="inherit"
            aria-label="content-edit"
            data-for="content-tooltip"
            data-tip="Edit on GitHub"
            href={page.edit_url}
            ripple={true}
            className={css(styles.icon).toString()}
          >
            <svg viewBox="0 0 24 24" css={styles.svg}>
              <path
                d="M14.06,9.02l0.92,0.92L5.92,19H5v-0.92L14.06,9.02 M17.66,3c-0.25,0-0.51,0.1-0.7,0.29l-1.83,1.83
          		l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C18.17,3.09,17.92,3,17.66,3L17.66,3z M14.06,6.19L3,17.25V21h3.75
          		L17.81,9.94L14.06,6.19L14.06,6.19z"
              />
            </svg>
          </Icon>
          <Icon
            color="inherit"
            aria-label="content-toc"
            data-for="content-tooltip"
            data-tip="Toggle the table of content"
            onClick={toggleToc}
            className={css(styles.icon).toString()}
            ripple={true}
          >
            <svg viewBox="0 0 24 24" css={styles.svg}>
              <path fill="none" d="M0,0h24v24H0V0z" />
              <path fill="none" d="M0,0h24v24H0V0z" />
              <path d="M3,9h14V7H3V9z M3,13h14v-2H3V13z M3,17h14v-2H3V17z M19,17h2v-2h-2V17z M19,7v2h2V7H19z M19,13h2v-2h-2V13z" />
            </svg>
          </Icon>
          <ReactTooltip
            id="content-tooltip"
            delayShow={300}
            place="bottom"
            effect="solid"
          />
        </div>
        }
        <div css={styles.main}>{children}</div>
      </main>
    )
  }
}

export default Main
