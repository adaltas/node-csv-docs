import React, {Component} from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'
import ReactTooltip from 'react-tooltip'
import Button from '../components/Button'
// Local
import bck from '../images/header_bck.svg'
import Logo from './Logo'
import { FaBug, FaGithub, FaBars } from 'react-icons/fa';

class Header extends Component {
  styles = {
    root: {
      height: '4rem',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.2rem',
      background: `url(${bck})`,
      backgroundSize: 'cover',
      borderBottom: '.1rem solid #FFF',
      padding: '.5rem 2rem 0 1rem',
      '@media (max-width: 960px)': {
      },
      '& *': {
        verticalAlign: 'baseline',
      },
      '& a': {
        color: '#FFF',
        textDecoration: 'none'
      },
    },
    
    icon: {
      color: '#FFF',
      position: 'relative',
      top: '-.1rem'
    },
    title: {
      marginTop: 0,
      marginBottom: 0,
      margin: 0,
      color: '#FFF',
      fontSize: '1.5rem',
    },
    logo: {
      fontFamily: 'csvlogo',
      letterSpacing: '.2rem',
      paddingRight: '.2rem'
    },
    grow: {
      flex: '1 1 auto',
    },
  }
  render () {
    const {onMenuClick} = this.props
    const {styles} = this
    return (
      <div css={styles.root}>
        <Button
          aria-label="header-menu"
          data-for="header-tooltip"
          data-tip="Toggle the menu"
          onClick={onMenuClick}
          className={css(styles.button).toString()}
        >
          <FaBars css={styles.icon} />
        </Button>
        <h1 css={styles.title}>
          <span css={styles.logo}>CSV</span>
          for Node.js
        </h1>
        <div css={styles.grow} />
        <a href="https://github.com/adaltas/node-csv/issues">
          <Button
            color="inherit"
            aria-label="header-bug"
            data-for="header-tooltip"
            data-tip="Report an issue"
            href="https://github.com/adaltas/node-hbase/issues"
            target="_blank"
            rel="noopener"
            className={css(styles.button).toString()}
          >
            <FaBug css={styles.icon} />
          </Button>
          Issues
        </a>
        <a href="https://github.com/adaltas/node-csv">
          <Button
            color="inherit"
            aria-label="header-github"
            data-for="header-tooltip"
            data-tip="Toggle the menu"
            target="_blank"
            rel="noopener"
            className={css(styles.button).toString()}
          >
            <FaGithub css={styles.icon} />
          </Button>
          GitHub
        </a>
        <ReactTooltip
          id="header-tooltip"
          delayShow={300}
          place="bottom"
          effect="solid"
        />
      </div>
    )
  }
}

export default Header
