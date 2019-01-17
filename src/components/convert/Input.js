import React, {Component} from 'react'
import TextArea from './form/TextArea'
import { css } from 'glamor'

const styles = {
  root: {
    flexGrow: '1',
  },
  input: {
    minHeight: '400px',
    height: '100%',
    width: '100%',
    resize: 'none',
  },
  fullscreen: {
    minHeight: 'auto',
  },
}

class Input extends Component {
  render() {
    const {props} = this
    const {fullscreen, input, onInput} = props
    console.log('input', input)
    return (
      <div css={styles.root}>
        <TextArea
          css={[styles.input, fullscreen && styles.fullscreen]}
          value={input}
          onChange={ value => onInput(value) }
        />
      </div>
    )
  }
}

export default Input
