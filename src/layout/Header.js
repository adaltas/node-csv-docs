import React, { Component } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/css'
import ReactTooltip from 'react-tooltip'
import Icon from '../components/Icon'
import Tools from './Tools'
import {
  TABLET_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
// Local
import bck from '../images/header_bck.svg'
import { FaBug, FaGithub, FaBars } from 'react-icons/fa'

const styles = {
  root: {
    background: `url(${bck})`,
    backgroundSize: 'cover',
    '@media (max-width: 960px)': {},
    '& a': {
      color: '#FFF',
      textDecoration: 'none',
    },
  },
  headerContainer: {
    backgroundColor: 'rgba(0,0,0,.5)',
    borderBottom: '.1rem solid #FFF',
    padding: '1rem 0 .5rem 0',
    top: 0,
    position: 'sticky',
    width: '100%',
    zIndex: 50,
  },
  headerTab: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      marginLeft: '1rem',
      textDecoration: 'none',
    },
    '& a button': {
      marginRight: '.5rem',
    },
    '& a:hover button': {
      backgroundColor: 'rgba(0, 0, 0, .2)',
    },
    '& a:hover svg *': {
      fill: '#00D0B4',
    },
    '& button:hover svg *': {
      fill: '#00D0B4',
    },
  },
  header: {
    maxWidth: '800',
    margin: '0 auto',
    [TABLET_MEDIA_QUERY]: {
      padding: '0 1rem',
    },
    [MIN_TABLET_MEDIA_QUERY]: {
      padding: '0 3rem 0 2.3rem',
    },
    boxSizing: 'content-box', // border-box
    fontSize: '1.2rem',
    // '& button:enabled:hover': {
    //   backgroundColor: 'rgba(0, 0, 0, .2)',
    // },
  },
  icon: {
    color: '#FFF',
    position: 'relative',
    top: '-.1rem',
  },
  menu: {
    // position: 'absolute',
    // padding: '1rem 0 0 .5rem',
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

export default function Header({
  children,
  onMenuClick,
  page,
  project,
}) {
  return (
    <>
      <div css={styles.headerContainer}>
        <header css={styles.header}>
          <div css={styles.headerTab}>
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
          </div>
          <ReactTooltip
            id="header-tooltip"
            delayShow={300}
            place="bottom"
            effect="solid"
          />
          <Tools page={page} />
        </header>
      </div>
    <div css={styles.root}>
      {children}
    </div>
    </>
  )
}
