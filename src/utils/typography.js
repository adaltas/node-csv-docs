import gray from 'gray-percentage'
import Typography from 'typography'
import {
  MIN_TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const theme = {
  baseFontSize: '17px',
  baseLineHeight: 1.666,
  bodyColor: '#DEE9EA',
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  headerColor: 'rgba(255,255,255,0.95)',
  headerFontFamily: ['Open Sans', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm, scale }, options) => ({
    'body, html': {
      // backgroundColor: '#384444',
      backgroundColor: '#445353',
      // background: '-moz-linear-gradient(-45deg, #445353 0%, #384444 100%)',
      // background: '-webkit-linear-gradient(-45deg, #445353 0%,#384444 100%)',
      background: 'linear-gradient(135deg, #445353 0%,#384444 100%)',
      filter:
        "progid:DXImageTransform.Microsoft.gradient( startColorstr='#445353', endColorstr='#384444',GradientType=1 )",
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
      color: '#B3C6C8',
    },
    'h1 a svg, h2 a svg, h3 a svg, h4 a svg, h5 a svg, h6 a svg': {
      fill: '#B3C6C8',
    },
    a: {
      textDecoration: 'none',
      color: '#FFF',
    },
    'a:hover, a:active': {
      color: '#00D0B4',
    },
    'main h1': {
      marginTop: '2rem',
    },
    'main a': {
      fontWeight: 'bold',
    },
    'main :not(pre) > code[class*="language-"]': {
      padding: '.1em .2em .1em .2em',
      backgroundColor: '#5D6F6F',
      color: '#fff',
    },
    'main a:hover > code[class*="language-"]': {
      backgroundColor: '#308484',
    },
    'main div .gatsby-highlight': {
      marginBottom: '1.45rem',
    },
    'code[class*="language-"],pre[class*="language-"]': {
      fontFamily: 'Fira Mono !important',
    },
    'main .display-embed-file-highlight > pre': {
      marginBottom: 0,
    },
    'main .display-embed-file-highlight > div': {
      textAlign: 'right',
      fontStyle: 'italic',
      padding: '0 .2rem',
    },
    'main .display-embed-file-highlight > div a': {
      fontWeight: 'lighter',
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid #fca206`,
      color: '#DEE9EA',
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
