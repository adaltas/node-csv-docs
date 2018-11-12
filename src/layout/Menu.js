import React, { Component } from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'

class Nav extends Component {
  styles = {
    root: {
      '& h1': {
        // color: '#B3C6C8',
        fontSize: '1.2rem',
        margin: '2rem 0 1rem 0',
        padding: '0 1rem',
      },
      '& ul': {
        margin: 0,
      },
      '& a': {
        textDecoration: 'none',
      },
    },
    li: {
      margin: 0,
      padding: 0,
      textIndent: 0,
      listStyleType: 'none',
    },
    link: {
      color: '#FFFFFF',
      display: 'block',
      padding: '.3rem 1rem 0 1rem',
      lineHeight: '1.2rem',
      ':hover': {
        backgroundColor: 'rgba(255,255,255,.1)',
      },
    },
    linkActive: {
      color: '#00D0B4',
    },
  }
  render() {
    const { title, pages, home, onClickLink } = this.props
    const { styles } = this
    return (
      <nav css={styles.root}>
        <h1>{title}</h1>
        <ul>
          {home && (
            <li key="/" css={styles.li}>
              <Link
                to="/"
                className={css(styles.link).toString()}
                activeClassName={css(styles.linkActive).toString()}
                onClick={onClickLink}
              >
                Homepage
              </Link>
            </li>
          )}
          {[
            ...pages.map(page => (
              <li key={page.slug} css={styles.li}>
                <Link
                  to={page.slug}
                  className={css(styles.link).toString()}
                  activeClassName={css(styles.linkActive).toString()}
                  onClick={onClickLink}
                >
                  {page.title}
                </Link>
              </li>
            )),
          ]}
        </ul>
      </nav>
    )
  }
}

class Menu extends Component {
  styles = {
    root: {
      height: '100%',
      backgroundColor: '#343B3B',
      borderRight: '1rem solid #95A2A2',
      // paddingBottom: '5rem',
    },
    footer: {
      // paddingLeft: '1rem',
      // paddingRight: '1rem',
      marginTop: '2rem',
      borderTop: '1px solid rgb(200, 200, 200)',
      padding: '1rem',
      backgroundColor: 'rgb(255,255,255,.1)',
      textAlign: 'justify',
      fontSize: '.8rem',
      '& a': {
        // textDecoration: 'none',
        // color: theme.typography.title.color,
      },
    },
  }
  render() {
    const { pages, onClickLink } = this.props
    const { styles } = this
    const menus = {
      project: {
        title: 'Project',
        pages: [],
      },
      generate: {
        title: 'Generate',
        pages: [],
      },
      parse: {
        title: 'Parse',
        pages: [],
      },
      transform: {
        title: 'Transform',
        pages: [],
      },
      stringify: {
        title: 'Stringify',
        pages: [],
      },
    }
    pages.map(page => {
      const section = /^\/(\w+)/.exec(page.slug)[1]
      menus[section].pages.push(page)
    })
    return (
      <aside css={[styles.root]}>
        <Nav
          home={true}
          title={menus.project.title}
          pages={menus.project.pages}
          onClickLink={onClickLink}
        />
        <Nav
          title={menus.generate.title}
          pages={menus.generate.pages}
          onClickLink={onClickLink}
        />
        <Nav
          title={menus.parse.title}
          pages={menus.parse.pages}
          onClickLink={onClickLink}
        />
        <Nav
          title={menus.transform.title}
          pages={menus.transform.pages}
          onClickLink={onClickLink}
        />
        <Nav
          title={menus.stringify.title}
          pages={menus.stringify.pages}
          onClickLink={onClickLink}
        />
        <div css={styles.footer}>
          Help us{' '}
          <a
            href="https://github.com/adaltas/node-nikita-docs/issues"
            target="_blank"
            rel="noopener"
          >
            improve the docs
          </a>{' '}
          by fixing typos and proposing enhancements.
        </div>
      </aside>
    )
  }
}

export default Menu
