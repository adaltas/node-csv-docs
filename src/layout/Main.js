import React, { Component } from 'react'
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
        padding: '0 3rem 0 3rem',
        boxSizing: 'content-box',
      },
    },
    main: {
      marginTop: '2rem',
      [MIN_TABLET_MEDIA_QUERY]: {
        boxSizing: 'border-box',
      },
      clear: 'right',
      '& h2:a': {
      },
      '& h2:before': {
        display: 'block',
        content: '"ok"',
        height: '120px',
        marginTop: '-120px',
        visibility: 'hidden',
      },
    },
  }
  constructor(props) {
    super(props)
  }
  render() {
    const { page, children } = this.props
    const { styles } = this
    return (
      <main ref={this.content} css={styles.root}>
        <div css={styles.main}>{children}</div>
      </main>
    )
  }
}

export default Main
