
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
      // backgroundColor: '#384444',
      backgroundColor: '#445353',
      background: '-moz-linear-gradient(-45deg, #445353 0%, #384444 100%)',
      background: '-webkit-linear-gradient(-45deg, #445353 0%,#384444 100%)',
      background: 'linear-gradient(135deg, #445353 0%,#384444 100%)',
      filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#445353\', endColorstr=\'#384444\',GradientType=1 )',
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
      color: '#B3C6C8',
    },
    'h1 a svg, h2 a svg, h3 a svg, h4 a svg, h5 a svg, h6 a svg': {
      fill: '#B3C6C8',
    },
    'a': {
      textDecoration: 'underline',
      color: 'rgba(255,255,255,0.95)',
    },
    'a:hover, a:active': {
      color: '#00D0B4',
    },
    'article h1': {
      textAlign: 'center',
    },
    'article h2': {
      borderBottom: '.5rem solid #fff',
      lineHeight: rhythm(1.5),
    },
    'main h1': {
      marginTop: '2rem',
      // display: 'inline-block',
    },
    'main :not(pre) > code[class*="language-"]': {
      padding: '.2em .3em .2em .3em',
      backgroundColor: '#282F2F',
      // backgroundColor: 'rgba(255,255,255,.1)',
      color: '#fff',
    },
    'main div .gatsby-highlight': {
      marginBottom: '1.45rem',
    },
    'code[class*="language-"],pre[class*="language-"]': {
      fontFamily: 'DejaVu !important',
    },
    'blockquote': {
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
