import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

class Ripple extends Component {
  styles = {
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
  state = {
    active: false,
  }
  start(event) {
    this.child.current.classList.add(css(this.styles.active).toString())
    this.startTimer = setTimeout(() => {
      this.child.current.classList.remove(css(this.styles.active).toString())
    }, 200)
  }
  stop(event, callback) {
    this.child.current.classList.remove(css(this.styles.active).toString())
    if (callback) callback()
  }
  constructor(props) {
    super(props)
    this.child = React.createRef()
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }
  render() {
    const { styles } = this
    return (
      <span css={[styles.ripple, this.state.active && styles.active]}>
        <span ref={this.child} css={styles.child} />
      </span>
    )
  }
}

class Button extends Component {
  styles = {
    base: {
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      verticalAlign: 'middle',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: '48px',
      height: '48px',
      padding: 0,
      fontSize: '1.5rem',
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: '50%',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, .08)',
      },
    },
    button: {
      cursor: 'pointer',
      border: 0,
      margin: 0,
      ':focus': {
        outline: 'none',
      },
    },
    link: {},
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit',
    },
  }
  handleBlur(event) {
    // console.log('handleBlur')
  }
  handleFocus(event) {
    // console.log('handleFocus')
  }
  handleKeyDown(event) {}
  handleKeyUp(event) {
    const key = event.key
    if (key === 'space' || key === 'enter') {
      event.persist()
      this.ripple.current.stop(event, () => {
        this.ripple.current.start(event)
      })
    }
  }
  handleMouseDown(event) {
    // console.log('handleMouseDown')
    event.persist()
    this.ripple.current.stop(event, () => {
      this.ripple.current.start(event)
    })
  }
  handleMouseLeave(event) {
    // console.log('handleMouseLeave')
  }
  handleMouseUp(event) {
    // console.log('handleMouseUp')
  }
  handleTouchMove(event) {
    // console.log('handleTouchMove')
  }
  handleTouchEnd(event) {
    // console.log('handleTouchEnd')
  }
  handleTouchStart(event) {
    // console.log('handleTouchStart')
    event.persist()
    this.ripple.current.stop(event, () => {
      this.ripple.current.start(event)
    })
  }
  constructor(props) {
    super(props)
    this.state = { isMobile: false }
    this.ripple = React.createRef()
    // this.handleMouseDown = this.handleMouseDown.bind(this)
  }
  componentDidMount() {
    if (window.innerWidth < this.props.breakpoint) {
      this.setState({ isMobile: true })
    }
  }
  // onRippleRef = node => {
  //   console.log('WHAT the fuck')
  //   this.ripple = node;
  //   console.log('this.ripple.start', this.ripple.start())
  // }
  render() {
    const {
      children,
      disabled,
      title,
      tabIndex,
      href,
      role,
      ...props
    } = this.props
    const { styles } = this
    const label = <span css={styles.label}>{children}</span>
    // const ripple =
    //   <span css={styles.ripple} />
    const Component = href ? 'a' : 'button'
    const componentProps = {
      title: title,
      tabIndex: tabIndex,
    }
    if (href) {
      componentProps.href = href
      componentProps.role = role
    } else {
      componentProps.type = 'button'
      componentProps.disabled = disabled
    }
    // href ? {
    //   type: 'button',
    //   disabled: disabled,
    // } : {
    //   href: href,
    //   role: role,
    // }
    return (
      <Component
        // ref={this.ripple}
        onBlur={this.handleBlur.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
        onKeyUp={this.handleKeyUp.bind(this)}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
        onTouchMove={this.handleTouchMove.bind(this)}
        onTouchStart={this.handleTouchStart.bind(this)}
        css={[styles.base, href ? styles.link : styles.button]}
        {...componentProps}
        {...props}
      >
        {label}
        <Ripple ref={this.ripple} />
      </Component>
    )
  }
}

Button.propTypes = {
  // disabled: PropTypes.boolean,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
}

Button.defaultProps = {
  role: 'button',
  tabIndex: 0,
  // disabled: false,
}

export default Button
