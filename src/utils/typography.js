
import gray from 'gray-percentage'
import Typography from 'typography'
import { MIN_TABLET_MEDIA_QUERY, MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme = {
  baseFontSize: '18px',
  // baseLineHeight: 1.666,
  bodyColor: 'rgba(255,255,255,0.95)',
  bodyFontFamily: ['Khula', 'sans-serif'],
  headerColor: 'rgba(255,255,255,0.95)',
  headerFontFamily: ['Khula', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm, scale }, options) => ({
    'body, html': {
      backgroundColor: '#4C5959',
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
      color: '#B3C6C8',
    },
    'a': {
      textDecoration: 'underline',
      color: 'rgba(255,255,255,0.95)',
    },
    'a:hover,a:active': {
      color: '#00D0B4',
    },
    'article h1': {
      textAlign: 'center',
    },
    'article h2': {
      borderBottom: '.5rem solid #fff',
      lineHeight: rhythm(1.5),
    },
    'main :not(pre) > code[class*="language-"]': {
      padding: '.2em .3em .2em .3em',
      background: '#667575',
      color: '#fff',
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid #fca206`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [MIN_TABLET_MEDIA_QUERY]: {
      textAlign: 'justify',
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
}

const typography = new Typography(theme)

export default typography
