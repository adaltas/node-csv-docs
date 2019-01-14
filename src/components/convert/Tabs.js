import React, {Component} from 'react'
import { css } from 'glamor'
import Button from '../Button'
import Icons from './icons/icons.svg'
import {
  TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const styles = {
  tabs: {
    display: 'flex',
    flexShrink: '0',
    position: 'relative',
    border: '1px solid #FFF8E2',
    borderRadius: '.4rem',
    margin: 0,
    overflow: 'hidden',
    alignItems: 'stretch',
    marginBottom: '1rem',
    '& button': {
      ':hover:enabled': {
        '& svg, & span': {
          fill: '#00D0B4',
          color: '#00D0B4',
        },
      },
    },
  },
  tab: {
    border: 'none',
    background: '#748688',
    color: '#ffffff',
    position: 'relative',
    display: 'block',
    flex: '1 0 auto',
    textAlign: 'center',
    alignItems: 'center',
    margin: 0,
    padding: '.3rem 0',
    borderRight: '1px solid #FFF8E2',
    '& span': {
      paddingLeft: '.6rem',
      verticalAlign: 'middle',
    },
    [TABLET_MEDIA_QUERY]: {
      '& span': {
        fontSize: '1rem',
        padding: 0,
        display: 'block',
      },
    },
    [MOBILE_MEDIA_QUERY]: {
      '& span': {
        fontSize: '.7rem',
      },
    },
    ':enabled': {
      cursor: 'pointer',
    },
    ':hover:enabled': {
      backgroundColor: '#4A5C5E',
      '::after': {
        backgroundColor: '#4A5C5E',
      }
    },
    '::after': {
      color: '#21ba45',
      display: 'block',
      position: 'absolute',
      zIndex: '2',
      content: '""',
      top: '50%',
      right: '0',
      border: 'medium none',
      backgroundColor: '#748688',
      width: '10px',
      height: '10px',
      borderStyle: 'solid',
      borderColor: 'rgba(255,255,255,1)',
      borderWidth: '0 1px 1px 0',
      transform: 'translateY(-50%) translateX(50%) rotate(-45deg)',
    },
    // ':last-child': {
    //   borderRight: 'none',
    // },
    // ':last-child::after': {
    //   display: 'none',
    // }
  },
  current: {
    background: '#456366',
    '::after': {
      backgroundColor: '#456366',
    },
  },
  tools: {
    padding: '0 .5rem',
    backgroundColor: '#3A5064',
    display: 'flex',
    alignContent: 'center',
  },
  fullscreen: {
    padding: '.3rem .6rem !important',
    '& svg': {
      width: '1rem',
      height: '1rem',
      fill: '#fff',
    },
    ':hover': {
      '& svg': {
        fill: '#00D0B4',
      },
    },
  },
  icon: {
    verticalAlign: 'middle',
    width: '1rem',
    height: '1rem',
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: props.current,
    }
  }
  render() {
    const {state, props} = this
    const {current} = state
    const {onTab, onFullscreen} = props
    const tabs = [{
      key: 'options',
      label: 'Options',
      svg: <svg css={styles.icon} fill={'#fff'}>
        <use xlinkHref={`${Icons}#icon-options`} />
      </svg>
    },{
      key: 'input',
      label: 'Input',
      svg: <svg css={styles.icon} fill={'#fff'}>
        <use xlinkHref={`${Icons}#icon-input`} />
      </svg>
    },{
      key: 'transform',
      label: 'Transform',
      svg: <svg css={styles.icon} fill={'#fff'}>
        <use xlinkHref={`${Icons}#icon-transform`} />
      </svg>
    },{
      key: 'output',
      label: 'Output',
      svg: <svg css={styles.icon} fill={'#fff'}>
        <use xlinkHref={`${Icons}#icon-output`} />
      </svg>
    }]
    return (
      <div role={'tablist'} css={styles.tabs}>
        { tabs.map( tab => {
          return (
          <button
            tabIndex={1}
            role={'tab'}
            key={tab.key}
            css={[styles.tab, current === tab.key && styles.current]}
            disabled={current === tab.key}
            onClick={e => {
              this.setState({current: tab.key})
              onTab(tab.key)
            }}
          >
            {tab.svg}
            <span>{tab.label}</span>
          </button>
          )
        }) }
        <div css={styles.tools}>
          <Button
            color="inherit"
            aria-label="fullscreen"
            data-for="tabs-fullscreen"
            data-tip="Enter fullscreen"
            onClick={onFullscreen}
            css={styles.fullscreen}
          >
            <svg css={styles.icon}>
              <use xlinkHref={`${Icons}#icon-fullscreen`} />
            </svg>
          </Button>
          
        </div>
      </div>
    )
  }
}

export default Tabs
