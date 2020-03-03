import React, {Component} from 'react'
import TextArea from './form/TextArea'

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

const Input = ({
  fullscreen,
  input,
  onInput
}) => (
  <div css={styles.root}>
    <TextArea
      css={[styles.input, fullscreen && styles.fullscreen]}
      value={input}
      onChange={ value => onInput(value) }
    />
  </div>
)

export default Input
