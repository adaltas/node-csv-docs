import React, { Fragment, useState } from 'react'
import Icon from '../components/Icon'
import { css } from '@emotion/css'
import { Tooltip } from 'react-tooltip'
import ReactDom from 'react-dom'
import {
  TABLET_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const toolsStyles = {
  toc: {
    position: 'absolute',
    right: 'calc( 3rem - 1px )', // 1px to show the border next to the tools
    top: '100%',
    width: '30%',
    marginTop: 1,
    padding: '1rem',
    backgroundColor: '#626F6F',
    '@media (max-width: 960px)': {
      borderRadius: '0 0 1.8rem 1.8rem',
    },
    '@media (min-width: 960px)': {
      borderRadius: '0 0 1.4rem 1.4rem',
    },
    border: '1px solid #fff',
  },
  tools: {
    position: 'absolute',
    top: 'calc( 100% + 1px )',
    right: '3rem',
    backgroundColor: '#626F6F',
    marginTop: 1,
    padding: '.4rem .4rem .4rem .4rem',
    '@media (max-width: 960px)': {
      borderRadius: '0 0 1.8rem 1.8rem',
    },
    '@media (min-width: 960px)': {
      borderRadius: '0 0 1.4rem 1.4rem',
    },
  },
  svg: {
    fill: '#fff',
    '@media (max-width: 960px)': {
      width: '1.4rem',
      height: '1.4rem',
    },
    '@media (min-width: 960px)': {
      width: '1.8rem',
      height: '1.8rem',
    },
  },
  icon: {
    outline: 'none',
    '@media (max-width: 960px)': {
      width: '1.8rem !important',
      height: '1.8rem !important',
    },
    '@media (min-width: 960px)': {
      width: '2.4rem !important',
      height: '2.4rem !important',
    },
  },
}

export default function Tools({ page }) {
  const [showToc, setShowToc] = useState(false)
  return (
    <Fragment>
      {page && showToc && (
        <div css={toolsStyles.toc}>
          <h2>Table of Contents</h2>
          <ul>
            {page.headings.map(({ id, value }) => (
              <li>
                <a href={`#${id}`} alt={value}>
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {page && page.edit_url && (
        <div css={toolsStyles.tools}>
          <Icon
            color="inherit"
            aria-label="Edit on GitHub"
            id="tooltip-edit"
            href={page.edit_url}
            ripple={true}
            className={css(toolsStyles.icon).toString()}
          >
            <svg viewBox="0 0 24 24" css={toolsStyles.svg}>
              <path
                d="M14.06,9.02l0.92,0.92L5.92,19H5v-0.92L14.06,9.02 M17.66,3c-0.25,0-0.51,0.1-0.7,0.29l-1.83,1.83
              l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C18.17,3.09,17.92,3,17.66,3L17.66,3z M14.06,6.19L3,17.25V21h3.75
              L17.81,9.94L14.06,6.19L14.06,6.19z"
              />
            </svg>
          </Icon>
          <Icon
            color="inherit"
            aria-label="Toggle table of content"
            id="tooltip-toc"
            onClick={() => setShowToc(!showToc)}
            className={css(toolsStyles.icon).toString()}
            ripple={true}
          >
            <svg viewBox="0 0 24 24" css={toolsStyles.svg}>
              <path fill="none" d="M0,0h24v24H0V0z" />
              <path fill="none" d="M0,0h24v24H0V0z" />
              <path d="M3,9h14V7H3V9z M3,13h14v-2H3V13z M3,17h14v-2H3V17z M19,17h2v-2h-2V17z M19,7v2h2V7H19z M19,13h2v-2h-2V13z" />
            </svg>
          </Icon>
          <Tooltip
            anchorId="tooltip-edit"
            delayShow={300}
            place="bottom"
            effect="solid"
            content="Edit on GitHub"
          />
          <Tooltip
            anchorId="tooltip-toc"
            delayShow={300}
            place="bottom"
            effect="solid"
            content="Toggle the table of content"
          />
        </div>
      )}
    </Fragment>
  )
}
