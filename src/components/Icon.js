import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

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
