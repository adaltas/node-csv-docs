import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import Button from './Button'

const riple_styles = {
  ripple: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 0,
    pointerEvents: 'none',
  },
  child: {
    transform: 'scale(.0)',
    opacity: 0.5,
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: '#000',
  },
  active: {
    transform: 'scale(1)',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
}

class Ripple extends Component {
  state = {
    active: false,
  }
  start(event) {
    this.child.current.classList.add(css(riple_styles.active).toString())
    this.startTimer = setTimeout(() => {
      this.child.current.classList.remove(css(riple_styles.active).toString())
    }, 200)
  }
  stop(event, callback) {
    this.child.current.classList.remove(css(riple_styles.active).toString())
    if (callback) callback()
  }
  constructor(props) {
    super(props)
    this.child = React.createRef()
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }
  render() {
    const styles = riple_styles
    return (
      <span css={[styles.ripple, this.state.active && styles.active]}>
        <span ref={this.child} css={styles.child} />
      </span>
    )
  }
}

const styles = {
  base: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  button: {
    ':focus': {
      outline: 'none',
    },
    ':enabled:hover': {
      backgroundColor: 'rgba(0, 0, 0, .08)',
    },
  },
  link: {
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, .08)',
    },
  },
}

class Icon extends Component {
  render() {
    const {
      userStyles,
      children,
      ...props
    } = this.props
    userStyles.base = { ...styles.base, ...userStyles.base }
    userStyles.button = { ...styles.button, ...userStyles.button }
    userStyles.link = { ...styles.link, ...userStyles.link }
    userStyles.label = { ...styles.label, ...userStyles.label }
    
    return (
      <Button
        userStyles={userStyles}
        {...props}
      >
        {children}
      </Button>
    )
  }
}

Icon.propTypes = {
  // disabled: PropTypes.boolean,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
}

Icon.defaultProps = {
  role: 'button',
  tabIndex: 0,
  // disabled: false,
  userStyles: {},
}

export default Icon
