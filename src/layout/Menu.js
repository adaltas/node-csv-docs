import React, { Component, useState } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/css'
import Icon from '../components/Icon'

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
    '& > ul': {
      margin: '0',
      paddingTop: '0',
      boxSizing: 'border-box',
      overflow: 'hidden',
      height: '0',
      opacity: '0',
      '& ul': {
        margin: 0,
        '& li': {
          padding: '0 1rem 0 1rem',
          '& a': {
            padding: '.2rem 1rem .2rem 1rem',
          },
        },
      },
      '& li': {
        margin: '0 0',
        padding: '0',
        textIndent: 0,
        listStyleType: 'none',
        '& a': {
          padding: '.5rem 1rem .5rem 1rem',
        },
      },
      '& > li': {
        '& > a, & li': {
          '@media not all and (pointer: coarse)': {
            ':hover': {
              backgroundColor: 'rgba(255,255,255,.1)',
            },
          },
        },
      }
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
    '& > ul': {
      // display: '',
      paddingTop: '1rem',
      overflow: 'visible',
      height: 'auto',
      opacity: '1',
      transition: 'opacity 1s',
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

const List1 = ({
  onClickLink,
  pages
}) => (
  <ul>
    {pages.sort( (p1, p2) => (
      String(p1.sort || p1.navtitle) > String(p2.sort || p2.navtitle) ? 1 : -1
    )).map( page => (
      <li key={'li'+page.slug} css={styles_nav.li}>
        <Link
          to={page.slug}
          className={css(styles_nav.link).toString()}
          activeClassName={css(styles_nav.linkActive).toString()}
          onClick={onClickLink}
        >
          {page.navtitle || page.title}
        </Link>
        { page.children &&
          <List
            onClickLink={onClickLink}
            pages={page.children}
          />
        }
      </li>
    ))}
  </ul>
)

const List = ({
  onClickLink,
  pages
}) => (
  <ul>
    {pages.map( page => (
      <li key={page.slug} css={styles_nav.li}>
        <Link
          to={page.slug}
          className={css(styles_nav.link).toString()}
          activeClassName={css(styles_nav.linkActive).toString()}
          onClick={onClickLink}
        >
          {page.navtitle || page.title}
        </Link>
        { page.children &&
          <List1
            onClickLink={onClickLink}
            pages={page.children}
          />
        }
      </li>
    ))}
  </ul>
)

const Nav = ({
  current,
  onClickLink,
  onToggle,
  pages,
  title
}) => (
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
    <List
      onClickLink={onClickLink}
      pages={pages}
    />
  </nav>
)

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
      content: '" "',
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

const Menu = ({
  onClickLink,
  pages,
  slug
}) => {
  const extractMenuSlug = (slug) => {
    slug = slug && slug !== '/' ? /^(\/\w+\/)/.exec(slug)[1] : '/'
    slug = slug === '/project/' ? '/' : slug
    return slug
  }
  const defaultSlug = extractMenuSlug(slug)
  const [currentSlug, setCurrentSlug] = useState(defaultSlug)
  const onToggle = (slug) => {
    setCurrentSlug(extractMenuSlug(slug))
  }
  let menus = { children: {
    project: {
      title: 'Project',
      sort: 1,
      slug: '/',
      children: {
        'home': {
          slug: '/',
          title: 'Homepage',
          sort: 1,
        },
        'convert': {
          slug: '/convert/',
          title: 'Convertor',
          sort: 2,
        }
      }
    },
    generate: {
      title: 'Generate',
      sort: 2,
    },
    parse: {
      // current: true,
      title: 'Parse',
      sort: 3,
    },
    transform: {
      title: 'Transform',
      sort: 4,
    },
    stringify: {
      title: 'Stringify',
      sort: 5,
    },
  } }
  // Build hierarchy, result is made of nested objects
  pages.map( page => {
    const namespace = page.slug.split('/').filter( name => !!name)
    let local = menus
    namespace.map( (name, i) => {
      if( namespace.length === 1){
        // Main section have child pages matching the section slug
        local.children[name].slug = page.slug
        local.children[name].children = {
          [name]: page
        }
      }else if( i < namespace.length - 1 ){
        // Build the tree
        if( !local.children[name] ) local.children[name] = {}
        // Navigate the tree
        local = local.children[name]
      }else{
        // Insert the page
        if(!local.children) local.children = {}
        local.children[name] = page
      }
    })
  })
  // Sort hierachy, result is made of nested arrays
  const sort = (pages) => {
    return Object.keys(pages)
    .map( name => {
      let page = {}
      Object.keys(pages[name]).map( property => {
        page[property] = pages[name][property]
      })
      if( page.children ){
        page.children = sort(page.children)
      }
      return page
    })
    .sort( (p1, p2) => (p1.sort || p1.navtitle || p1.title) > (p2.sort || p2.navtitle || p2.title))
  }
  menus = sort(menus.children)
  return (
    <aside css={[styles.root]}>
      <div css={styles.menu}>
      {
        menus.map( (page) => (
          <Nav
            key={page.slug}
            current={currentSlug === page.slug}
            title={page.title}
            pages={page.children}
            onClickLink={onClickLink}
            onToggle={() => onToggle(page.slug)}
          />
        ))
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

export default Menu
