import React, { Component } from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'
import Icon from '../components/Icon'

// make the keyframes with glamor
// const display = css.keyframes({
//   '0%': { display: '', opacity: `0` },
//   '100%': { display: '', opacity: ` 1` }
// })

const styles_nav = {
  root: {
    fontWeight: '300',
    '& h1': {
      fontSize: '1.2rem',
      fontWeight: '300',
      margin: '2rem 0 0 0',
      padding: '0 1rem',
      display: 'flex',
      cursor: 'pointer',
      '& span': {
        flexGrow: '1',
      },
      ':hover button': {
        backgroundColor: 'rgba(255, 255, 255, .2)',
      },
    },
    '& ul': {
      margin: '0',
      paddingTop: '0',
      boxSizing: 'border-box',
      overflow: 'hidden',
      height: '0',
      opacity: '0',
    },
    '& a': {
      textDecoration: 'none',
    },
  },
  current: {
    '& h1': {
      cursor: 'default',
      ':hover button': {
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },
    },
    '& ul': {
      // display: '',
      paddingTop: '1rem',
      overflow: 'visible',
      height: 'auto',
      opacity: '1',
      transition: 'opacity 1s',
    },
  },
  li: {
    margin: '.3rem 0',
    padding: '0 1rem 0 1rem',
    textIndent: 0,
    listStyleType: 'none',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,.1)',
    }
  },
  li_3: {
    margin: '0',
    '& a': {
      borderLeft: '1px solid #fff',
      paddingLeft: '1rem',
    },
  },
  link: {
    color: '#FFFFFF',
    display: 'block',
    lineHeight: '1.2rem',
    padding: '.2rem 0',
  },
  linkActive: {
    color: '#00D0B4',
  },
  button: {
    width: '1.4rem !important',
    height: '1.4rem !important',
    // lineHeight: '1.6rem',
    float: 'right',
    textAlign: 'center',
    ':enabled:hover': {
      backgroundColor: 'rgba(255, 255, 255, .2)',
    }
  },
  icon: {
    color: '#FFF',
    padding: '.2rem .15rem',
    width: '1.2rem',
    height: '1.2rem',
  },
  icon_up: {
    transform: 'rotate(-90deg)',
    transition: 'transform .5s ease-out',
  },
  icon_down: {
    transform: 'rotate(0deg)',
  }
}

class Nav extends Component {
  render() {
    const { current, title, pages, home, onClickLink, onToggle} = this.props
    return (
      <nav css={[styles_nav.root, current && styles_nav.current]}>
        <h1 onClick={onToggle}>
          <span>
            {title}
          </span>
          <Icon
            color="inherit"
            ripple={true}
            className={css(styles_nav.button).toString()}
            disabled={current}
          >
            <svg css={[styles_nav.icon, current ? styles_nav.icon_up : styles_nav.icon_down]}>
              <polygon points="8,14.124,1,2,15,2" fill="none" stroke="rgb(179,198,200)"/>
            </svg>
          </Icon>
        </h1>
        <ul>
          {home && (
            <>
            <li key="/" css={styles_nav.li}>
              <Link
                to="/"
                className={css(styles_nav.link).toString()}
                activeClassName={css(styles_nav.linkActive).toString()}
                onClick={onClickLink}
              >
                Homepage
              </Link>
            </li>
            <li key="/convert/" css={styles_nav.li}>
              <Link
                to="/convert/"
                className={css(styles_nav.link).toString()}
                activeClassName={css(styles_nav.linkActive).toString()}
                onClick={onClickLink}
              >
                Convertor
              </Link>
            </li>
            </>
          )}
          {[
            ...pages.map(page => (
              <li key={page.slug} css={[styles_nav.li, styles_nav['li_'+(page.slug.split('/').length-2)]]}>
                <Link
                  to={page.slug}
                  className={css(styles_nav.link).toString()}
                  activeClassName={css(styles_nav.linkActive).toString()}
                  onClick={onClickLink}
                >
                  {page.navtitle || page.title}
                </Link>
              </li>
            )),
          ]}
        </ul>
      </nav>
    )
  }
}

const styles = {
  root: {
    height: '100%',
    backgroundColor: 'rgb(79,79,79,1)',
    borderRight: '1rem solid #95A2A2',
    '@media (min-width: 960px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  menu: {
    flexGrow: 1,
    overflow: 'auto',
    backgroundColor: '#343B3B',
    display: 'block',
    '&:after': {
      content: ' ',
      display: 'block',
      height: '2rem',
    }
  },
  footer: {
    borderTop: '1px solid rgb(200, 200, 200)',
    padding: '1rem',
    textAlign: 'normal',
    fontSize: '.8rem',
    '@media (max-width: 960px)': {
      paddingBottom: '6rem',
    },
  },
}

class Menu extends Component {
  constructor(props) {
    super(props)
    const section = props.slug ? /^\/(\w+)/.exec(props.slug)[1] : 'project'
    this.state = { current: section }
    this.menus = {
      project: {
        title: 'Project',
        home: true,
        pages: [],
      },
      generate: {
        title: 'Generate',
        pages: [],
      },
      parse: {
        // current: true,
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
    props.pages.map(page => {
      const section = /^\/(\w+)/.exec(page.slug)[1]
      page.current = page.slug === props.slug
      if(page.current === true){
        this.menus[section].current = true
      }
      return this.menus[section].pages.push(page)
    })
  }
  render() {
    const { onClickLink } = this.props
    const { current } = this.state
    const { menus } = this
    const onToggle = (section) => {
      this.setState({current: section})
    }
    return (
      <aside css={[styles.root]}>
        <div css={styles.menu}>
        {
          Object.keys(menus).map(section => {
            const pkg = menus[section]
            return (
              <Nav
                key={section}
                current={current ? current === section : pkg.current}
                home={pkg.home}
                title={pkg.title}
                pages={pkg.pages}
                onClickLink={onClickLink}
                onToggle={() => onToggle(section)}
              />
            )
          })
        }
        </div>
        <div css={styles.footer}>
          Help us{' '}
          <a
            href="https://github.com/adaltas/node-csv-docs/issues"
          >
            improve the docs
          </a>{' '}
          by proposing enhancements and fixing typos.
        </div>
      </aside>
    )
  }
}

export default Menu
