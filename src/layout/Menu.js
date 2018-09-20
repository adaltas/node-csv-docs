import React, {Component} from 'react'
import {Link} from 'gatsby'
import {css} from 'glamor'

class Nav extends Component {
  styles = {
    root: {
      padding: '0 1rem',
      '& h1': {
        // color: '#B3C6C8',
        fontSize: '1.2rem',
        margin: '2rem 0 1rem 0',
      },
      '& ul': {
        margin: 0,
      },
      '& a': {
        textDecoration: 'none',
      }
    },
    li: {
      margin: 0,
      padding: 0,
      textIndent: 0,
      listStyleType: 'none',
    },
    link: {
      color: '#FFFFFF',
    },
    linkActive: {},
  }
  render () {
    const {title, pages, onClickLink} = this.props
    const {styles} = this
    return (
      <nav css={styles.root}>
        <h1>{title}</h1>
        <ul>
          {[
            ...pages.map( page =>
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
            ),
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
      backgroundColor: '#414A4A',
      borderRight: '1rem solid #95A2A2',
    },
  }
  render () {
    const {pages, onClickLink} = this.props
    const {styles} = this
    const menus = {
      project: {
        title: 'Project', pages: []
      },
      generate: {
        title: 'Generate', pages: []
      },
      parse: {
        title: 'Parse', pages: []
      },
      transform: {
        title: 'Transform', pages: []
      },
      stringify: {
        title: 'stringify', pages: []
      },
    }
    pages.map( page => {
      const section = /^\/(\w+)/.exec(page.slug)[1]
      menus[section].pages.push(page)
    })
    return (
      <aside css={[styles.root]}>
        <Nav
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
      </aside>
    )
  }
}

export default Menu
