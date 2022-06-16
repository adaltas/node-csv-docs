import React, { Component } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/css'
import ReactTooltip from 'react-tooltip'
import Icon from '../components/Icon'
import {
  TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
// Local
import bck from '../images/header_bck.svg'
import { FaBug, FaGithub, FaBars } from 'react-icons/fa'

class Header extends Component {
  styles = {
    root: {
      background: `url(${bck})`,
      backgroundSize: 'cover',
      '@media (max-width: 960px)': {},
      '& a': {
        color: '#FFF',
        textDecoration: 'none',
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
      '& a:hover button': {
        backgroundColor: 'rgba(0, 0, 0, .08)',
        
      }
    },
    icon: {
      color: '#FFF',
      position: 'relative',
      top: '-.1rem',
    },
    menu: {
      position: 'absolute',
      padding: '1rem 0 0 .5rem',
    },
    title: {
      marginTop: 0,
      marginBottom: 0,
      margin: 0,
      color: '#FFF',
      fontSize: '1.4rem',
      // '@media (max-width:374px)': {
      //   fontSize: '1.2rem',
      // }
    },
    logo: {
      fontFamily: 'csvlogo',
      letterSpacing: '.2rem',
      paddingRight: '.2rem',
    },
    nodejs: {
      // '@media (max-width:374px)': {
      //   display: 'none',
      // },
      [MOBILE_MEDIA_QUERY]: {
        display: 'none',
      },
    },
    grow: {
      flex: '1 1 auto',
    },
    button: {},
    quick: {
      marginLeft: '1rem',
      [TABLET_MEDIA_QUERY]: {
        marginLeft: '0',
      },
    },
    quick_label: {
      [TABLET_MEDIA_QUERY]: {
        display: 'none',
      },
    },
  }
  render() {
    const { children, onMenuClick, project } = this.props
    const { styles } = this
    return (
      <div css={styles.root}>
        <div css={styles.menu}>
          <Icon
            aria-label="Toggle the menu"
            data-for="header-tooltip"
            data-tip="Toggle the menu"
            onClick={onMenuClick}
            className={css(styles.button).toString()}
            ripple={true}
          >
            <FaBars css={styles.icon} />
          </Icon>
        </div>
        <div css={styles.header}>
          <header css={styles.headerContainer}>
            <h1 css={styles.title}>
              <Link to="/">
                <span css={styles.logo}>CSV</span>
                {project.slug !== 'project' && (
                  <span css={styles.project}>{project.label}</span>
                )}
                <span css={styles.nodejs}>{' for Node.js'}</span>
              </Link>
            </h1>
            <div css={styles.grow} />
            <a
              href={project.issue}
              css={styles.quick}
              data-for="header-tooltip"
              data-tip="Report an issue"
            >
              <Icon
                color="inherit"
                aria-labelledby="header-bug"
                className={css(styles.button).toString()}
                ripple={true}
              >
                <FaBug css={styles.icon} />
              </Icon>
              <span id="header-bug" css={styles.quick_label}>Issues</span>
            </a>
            <a
              href={project.github}
              css={styles.quick}
              data-for="header-tooltip"
              data-tip="GitHub repository"
            >
              <Icon
                color="inherit"
                aria-labelledby="header-github"
                className={css(styles.button).toString()}
                ripple={true}
              >
                <FaGithub css={styles.icon} />
              </Icon>
              <span id="header-github" css={styles.quick_label}>GitHub</span>
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
