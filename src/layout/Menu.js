import React, { Component } from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'
import Button from '../components/Button'

// make the keyframes with glamor
// const display = css.keyframes({
//   '0%': { display: '', opacity: `0` },
//   '100%': { display: '', opacity: ` 1` }
// })

const styles = {
  root: {
    '& h1': {
      fontSize: '1.2rem',
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
    paddingTop: '.3rem',
  },
  linkActive: {
    color: '#00D0B4',
  },
  button: {
    width: '1.4rem',
    height: '1.4rem',
    lineHeight: '1.6rem',
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
    const handleMouseOver = e => {
      
    }
    return (
      <nav css={[styles.root, current && styles.current]}>
        <h1 onClick={onToggle}>
          <span>
            {title}
          </span>
          <Button
            color="inherit"
            aria-label="content-edit"
            data-for="content-tooltip"
            data-tip="Edit on GitHub"
            target="_blank"
            rel="noopener"
            className={css(styles.button).toString()}
            disabled={current}
          >
            <svg css={[styles.icon, current ? styles.icon_up : styles.icon_down]}>
              <polygon points="8,14.124,1,2,15,2" fill="none" stroke="rgb(179,198,200)"/>
            </svg>
          </Button>
        </h1>
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
              <li key={page.slug} css={[styles.li, styles['li_'+(page.slug.split('/').length-2)]]}>
                <Link
                  to={page.slug}
                  className={css(styles.link).toString()}
                  activeClassName={css(styles.linkActive).toString()}
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

class Menu extends Component {
  styles = {
    root: {
      height: '100%',
      backgroundColor: '#343B3B',
      borderRight: '1rem solid #95A2A2',
      // background: 'linear-gradient(to right, #343b3b 0%,#343b3b 95%,#95a2a2 95%,#95a2a2 100%)',
    },
    footer: {
      marginTop: '2rem',
      borderTop: '1px solid rgb(200, 200, 200)',
      padding: '1rem',
      backgroundColor: 'rgb(255,255,255,.1)',
      textAlign: 'justify',
      fontSize: '.8rem',
    },
  }
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
      this.menus[section].pages.push(page)
    })
  }
  render() {
    const { pages, onClickLink, slug } = this.props
    const { current } = this.state
    const { menus, styles } = this
    const onToggle = (section) => {
      this.setState({current: section})
    }
    return (
      <aside css={[styles.root]}>
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
