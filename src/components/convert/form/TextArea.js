import React, {Component} from 'react'
import { css } from '@emotion/css'

const styles = {
  root: {
    border: '1px solid #fff',
    boxShadow: 'inset 2px 2px 5px rgba(0,0,0,.3)',
    borderRadius: '.2rem',
    backgroundColor: '#C3D0D0',
    padding: '.4rem',
  },
  error: {
    border: '1px solid red',
  },
}

class TextArea extends Component {
  constructor(props){
    super(props)
    this.rootRef = React.createRef()
    this.state = {
      value: props.value
    }
  }
  render() {
    const {props, state} = this
    const {value} = state
    const {className, onChange, validate} = props
    return (
      <textarea
        ref={this.rootRef}
        className={className}
        css={[styles.root]}
        onChange={ e => {
          const value = e.target.value
          const error = validate ? !validate(value) : false
          this.rootRef.current.classList[error?'add':'remove'](css(styles.error).toString())
          this.setState({value: value})
          if(!error){
            onChange && onChange(value)
          }
        }}
        value={value}
      />
    )
  }
}

export default TextArea
