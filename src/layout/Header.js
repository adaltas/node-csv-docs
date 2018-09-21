import React, {Component} from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'
import ReactTooltip from 'react-tooltip'
import Button from '../components/Button'
import { TABLET_MEDIA_QUERY, MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
// Local
import bck from '../images/header_bck.svg'
import { FaBug, FaGithub, FaBars } from 'react-icons/fa';

class Header extends Component {
  styles = {
    root: {
      background: `url(${bck})`,
      backgroundSize: 'cover',
      '@media (max-width: 960px)': {
      },
      '& a': {
        color: '#FFF',
        textDecoration: 'none'
      },
    },
    header: {
      backgroundColor: 'rgba(0,0,0,.5)',
      borderBottom: '.1rem solid #FFF',
      padding: '1rem 0 .5rem 0',
    },
    headerContainer: {
      maxWidth: '800',
      margin: '0 auto',
      padding: '0 1rem 0 3rem',
      boxSizing: 'content-box',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.2rem',
      '& *': {
        verticalAlign: 'baseline',
      },
    },
    button: {
    },
    menu: {
      position: 'absolute',
      padding: '1rem 0 0 .5rem',
    },
    icon: {
      color: '#FFF',
      position: 'relative',
      top: '-.1rem'
    },
    label: {
      [TABLET_MEDIA_QUERY]: {
        display: 'none',
      },
    },
    title: {
      marginTop: 0,
      marginBottom: 0,
      margin: 0,
      color: '#FFF',
      fontSize: '1.5rem',
      // '@media (max-width:374px)': {
      //   fontSize: '1.2rem',
      // }
    },
    logo: {
      fontFamily: 'csvlogo',
      letterSpacing: '.2rem',
      paddingRight: '.2rem'
    },
    node: {
      '@media (max-width:374px)': {
        display: 'none',
      }
    },
    grow: {
      flex: '1 1 auto',
    },
  }
  render () {
    const {children, onMenuClick} = this.props
    const {styles} = this
    return (
      <div css={styles.root}>
        <div css={styles.menu}>
          <Button
            aria-label="header-menu"
            data-for="header-tooltip"
            data-tip="Toggle the menu"
            onClick={onMenuClick}
            className={css(styles.button).toString()}
          >
            <FaBars css={styles.icon} />
          </Button>
        </div>
        <div css={styles.header}>
          <header css={styles.headerContainer}>
            <h1 css={styles.title}>
              <Link to="/">
                <span css={styles.logo}>CSV</span>
                <span css={styles.node}>for Node.js</span>
                </Link>
            </h1>
            <div css={styles.grow} />
            <a href="https://github.com/adaltas/node-csv/issues" rel="noopener" target="_blank">
              <Button
                color="inherit"
                aria-label="header-bug"
                data-for="header-tooltip"
                data-tip="Report an issue"
                className={css(styles.button).toString()}
              >
                <FaBug css={styles.icon} />
              </Button>
              <span css={styles.label}>Issues</span>
            </a>
            <a href="https://github.com/adaltas/node-csv" rel="noopener" target="_blank">
              <Button
                color="inherit"
                aria-label="header-github"
                data-for="header-tooltip"
                data-tip="Toggle the menu"
                className={css(styles.button).toString()}
              >
                <FaGithub css={styles.icon} />
              </Button>
              <span css={styles.label}>GitHub</span>
            </a>
            <ReactTooltip
              id="header-tooltip"
              delayShow={300}
              place="bottom"
              effect="solid"
            />
          </header>
        </div>
        {children}
      </div>
    )
  }
}

export default Header
