import React, { Component, useRef } from 'react'
import { Link } from 'gatsby'
import {
  TABLET_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const styles = {
  intro: {
    padding: '1rem 0',
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  about: {
    position: 'relative',
    maxWidth: 800,
    margin: '0 auto',
    [TABLET_MEDIA_QUERY]: {
      padding: '1rem 1rem 1rem 1rem',
    },
    [MIN_TABLET_MEDIA_QUERY]: {
      padding: '0 1rem 0 3rem',
      // boxSizing: 'content-box',
    },
    boxSizing: 'content-box',
    '& svg': {
      maxHeight: '100%',
    },
  },
  headline: {
    position: 'relative',
    backgroundColor: 'rgba(25,47,74,.5)',
    borderTop: '.1rem solid #FFF',
    '& p': {
      margin: '0 auto',
      textAlign: 'center',
      maxWidth: '800',
      boxSizing: 'content-box',
      fontSize: '1.4rem',
      [TABLET_MEDIA_QUERY]: {
        padding: '2rem 1rem 1rem 1rem',
        fontSize: '1.2rem',
      },
      [MIN_TABLET_MEDIA_QUERY]: {
        padding: '1rem 1rem .4rem 3rem',
        // boxSizing: 'content-box',
      },
    },
    // '& a': {
    //   textDecoration: 'underline',
    //   textUnderlinePosition: 'right',
    // }
  },
}

const Intro = () => {
  const generateRef = useRef(null)
  const parseRef = useRef(null)
  const transformRef = useRef(null)
  const stringifyRef = useRef(null)
  return (
    <>
      <div css={styles.intro}>
        <div css={styles.about}>
          <svg
            style={{ isolation: 'isolate' }}
            viewBox="474.738 354.906 797.525 333.188"
          >
            <g>
              <g>
                <path
                  d=" M 514.762 488.71 C 466.024 516.507 442.682 756.345 664.762 627.71"
                  fill="none"
                  stroke="rgb(255,255,255)"
                  strokeLinecap="square"
                  strokeWidth="5"
                />
                <path
                  d=" M 960.762 599.71 C 960.975 661.703 885.792 732.126 1080.762 625.71"
                  fill="none"
                  stroke="rgb(255,255,255)"
                  strokeLinecap="square"
                  strokeWidth="5"
                />
                <path
                  d=" M 841.762 522.71 C 905.55 485.527 954.658 241.047 959.762 438.71"
                  fill="none"
                  stroke="rgb(255,255,255)"
                  strokeLinecap="square"
                  strokeWidth="5"
                />
              </g>
              <a
                href="/generate/"
                alt="CSV Generate package"
                onMouseEnter={(e) =>
                  generateRef.current.style['fill-opacity'] = .4
                }
                onMouseLeave={(e) =>
                  generateRef.current.style['fill-opacity'] = .2
                }
              >
                <g>
                  <polygon
                    fill="rgb(235,235,235)"
                    fillOpacity="0.2"
                    points="635.565,528.712,541.03,528.712,493.762,449.727,541.03,370.741,635.565,370.741,682.833,449.727"
                  />
                  <radialgradient
                    id="_rgradient_4"
                    cx="0.5"
                    cy="0.5"
                    fx="0.5"
                    fy="0.5"
                    gradientTransform="matrix(189.071,0,0,157.971,493.762,370.741)"
                    gradientUnits="userSpaceOnUse"
                    r="0.5"
                  >
                    <stop
                      style={{ stopColor: 'rgb(26,66,43)' }}
                      offset="2.608695652173913%"
                      stopOpacity="1"
                    />
                    <stop
                      style={{ stopColor: 'rgb(63,41,100)' }}
                      offset="97.82608695652173%"
                      stopOpacity="0"
                    />
                  </radialgradient>
                  <polygon
                    fill="url(#_rgradient_4)"
                    fillOpacity="0.3"
                    points="635.565,528.712,541.03,528.712,493.762,449.727,541.03,370.741,635.565,370.741,682.833,449.727"
                  />
                  <g style={{ isolation: 'isolate' }}>
                    <polygon
                      ref={generateRef}
                      fillOpacity="0.2"
                      points="635.565,528.712,541.03,528.712,493.762,449.727,541.03,370.741,635.565,370.741,682.833,449.727"
                      stroke="rgb(255,255,255)"
                      strokeLinecap="square"
                      strokeOpacity="0.7"
                      strokeWidth="1"
                    />
                  </g>
                  <g transform="matrix(1,0,0,1,516,430.459)">
                    <text
                      style={{
                        fontFamily: "Fira Mono",
                        fontWeight: '400',
                        fontSize: '30px',
                        fontStyle: 'normal',
                        fill: '#ffffff',
                        stroke: 'none',
                      }}
                      transform="matrix(1,0,0,1,0.462,24)"
                    >
                      generate
                    </text>
                  </g>
                </g>
              </a>
              <a
                href="/parse/"
                alt="CSV Parse package"
                onMouseEnter={(e) =>
                  parseRef.current.style['fill-opacity'] = .4
                }
                onMouseLeave={(e) =>
                  parseRef.current.style['fill-opacity'] = .2
                }
              >
                <g>
                  <polygon
                    fill="rgb(235,235,235)"
                    fillOpacity="0.2"
                    points="811.886,673.71,694.027,673.71,635.097,575.237,694.027,476.763,811.886,476.763,870.816,575.237"
                  />
                  <radialgradient
                    id="_rgradient_5"
                    cx="0.5"
                    cy="0.5"
                    fx="0.5"
                    fy="0.5"
                    gradientTransform="matrix(235.719,0,0,196.947,635.097,476.763)"
                    gradientUnits="userSpaceOnUse"
                    r="0.5"
                  >
                    <stop
                      style={{ stopColor: 'rgb(11,53,45)' }}
                      offset="2.1739130434782608%"
                      stopOpacity="1"
                    />
                    <stop
                      style={{ stopColor: 'rgb(63,41,100)' }}
                      offset="97.82608695652173%"
                      stopOpacity="0"
                    />
                  </radialgradient>
                  <polygon
                    fill="url(#_rgradient_5)"
                    fillOpacity="0.3"
                    points="811.886,673.71,694.027,673.71,635.097,575.237,694.027,476.763,811.886,476.763,870.816,575.237"
                  />
                  <g style={{ isolation: 'isolate' }}>
                    <polygon
                      ref={parseRef}
                      fillOpacity="0.2"
                      points="811.886,673.71,694.027,673.71,635.097,575.237,694.027,476.763,811.886,476.763,870.816,575.237"
                      stroke="rgb(255,255,255)"
                      strokeLinecap="square"
                      strokeOpacity="0.7"
                      strokeWidth="1"
                    />
                  </g>
                  <g transform="matrix(1,0,0,1,706,555.969)">
                    <text
                      style={{
                        textAlign: 'center',
                        fontFamily: "Fira Mono",
                        fontWeight: '400',
                        fontSize: '30px',
                        fontStyle: 'normal',
                        fill: '#ffffff',
                        stroke: 'none',
                      }}
                      transform="matrix(1,0,0,1,0.264,24)"
                    >
                      parse
                    </text>
                  </g>
                </g>
              </a>
              <a
                href="/transform/"
                alt="Stream Transform package"
                onMouseEnter={(e) =>
                  transformRef.current.style['fill-opacity'] = .4
                }
                onMouseLeave={(e) =>
                  transformRef.current.style['fill-opacity'] = .2
                }
              >
                <g>
                  <polygon
                    fill="rgb(235,235,235)"
                    fillOpacity="0.2"
                    points="1009.926,597.544,915.391,597.544,868.123,518.559,915.391,439.573,1009.926,439.573,1057.194,518.559"
                  />
                  <radialgradient
                    id="_rgradient_6"
                    cx="0.5"
                    cy="0.5"
                    fx="0.5"
                    fy="0.5"
                    gradientTransform="matrix(189.071,0,0,157.971,868.123,439.573)"
                    gradientUnits="userSpaceOnUse"
                    r="0.5"
                  >
                    <stop
                      style={{ stopColor: 'rgb(11,51,53)' }}
                      offset="0%"
                      stopOpacity="1"
                    />
                    <stop
                      style={{ stopColor: 'rgb(63,41,100)' }}
                      offset="100%"
                      stopOpacity="0"
                    />
                  </radialgradient>
                  <polygon
                    fill="url(#_rgradient_6)"
                    fillOpacity="0.3"
                    points="1009.926,597.544,915.391,597.544,868.123,518.559,915.391,439.573,1009.926,439.573,1057.194,518.559"
                  />
                  <g style={{ isolation: 'isolate' }}>
                    <polygon
                      ref={transformRef}
                      fillOpacity="0.2"
                      points="1009.926,597.544,915.391,597.544,868.123,518.559,915.391,439.573,1009.926,439.573,1057.194,518.559"
                      stroke="rgb(255,255,255)"
                      strokeLinecap="square"
                      strokeOpacity="0.7"
                      strokeWidth="1"
                    />
                  </g>
                  <g transform="matrix(1,0,0,1,881,501)">
                    <text
                      style={{
                        fontFamily: "Fira Mono",
                        fontWeight: '400',
                        fontSize: '30px',
                        fontStyle: 'normal',
                        fill: '#ffffff',
                        stroke: 'none',
                      }}
                      transform="matrix(1,0,0,1,0.071,24)"
                    >
                      transform
                    </text>
                  </g>
                </g>
              </a>
              <a
                href="/stringify/"
                alt="CSV Stringify package"
                onMouseEnter={(e) =>
                  stringifyRef.current.style['fill-opacity'] = .4
                }
                onMouseLeave={(e) =>
                  stringifyRef.current.style['fill-opacity'] = .2
                }
              >
                <g>
                  <polygon
                    fill="rgb(235,235,235)"
                    fillOpacity="0.2"
                    points="1216.62,665.858,1108.336,665.858,1054.194,575.385,1108.336,484.912,1216.62,484.912,1270.762,575.385"
                  />
                  <radialgradient
                    id="_rgradient_7"
                    cx="0.5"
                    cy="0.5"
                    fx="0.5"
                    fy="0.5"
                    gradientTransform="matrix(216.568,0,0,180.946,1054.194,484.912)"
                    gradientUnits="userSpaceOnUse"
                    r="0.5"
                  >
                    <stop
                      style={{ stopColor: 'rgb(11,40,53)' }}
                      offset="0%"
                      stopOpacity="1"
                    />
                    <stop
                      style={{ stopColor: 'rgb(63,41,100)' }}
                      offset="100%"
                      stopOpacity="0"
                    />
                  </radialgradient>
                  <polygon
                    fill="url(#_rgradient_7)"
                    fillOpacity="0.3"
                    points="1216.62,665.858,1108.336,665.858,1054.194,575.385,1108.336,484.912,1216.62,484.912,1270.762,575.385"
                  />
                  <g style={{ isolation: 'isolate' }}>
                    <polygon
                      ref={stringifyRef}
                      fillOpacity="0.2"
                      points="1216.62,665.858,1108.336,665.858,1054.194,575.385,1108.336,484.912,1216.62,484.912,1270.762,575.385"
                      stroke="rgb(255,255,255)"
                      strokeLinecap="square"
                      strokeOpacity="0.7"
                      strokeWidth="1"
                    />
                  </g>
                  <g transform="matrix(1,0,0,1,1083,556.117)">
                    <text
                      style={{
                        fontFamily: "Fira Mono",
                        fontWeight: '400',
                        fontSize: '30px',
                        fontStyle: 'normal',
                        fill: '#ffffff',
                        stroke: 'none',
                      }}
                      transform="matrix(1,0,0,1,0.085,24)"
                    >
                      stringify
                    </text>
                  </g>
                </g>
              </a>
            </g>
          </svg>
        </div>
      </div>
      <div css={styles.headline}>
        <p>
          Comprehensive CSV suite combining 4 well tested packages to{' '}
          <Link to="/generate/">generate</Link>,{' '}
          <Link to="/parse/">parse</Link>,{' '}
          <Link to="/transform/">transform</Link> and{' '}
          <Link to="/stringify/">stringify</Link> CSV data.
        </p>
      </div>
    </>
  )
}

export default Intro
