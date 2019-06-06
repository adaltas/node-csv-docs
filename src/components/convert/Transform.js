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

class Transform extends Component {
  render() {
    const {props} = this
    const {fullscreen, onTransform, transform} = props
    return (
      <div css={styles.root}>
        <TextArea
          css={[styles.input, fullscreen && styles.fullscreen]}
          value={transform || "function(record){\n  return record;\n}"}
          onChange={ value => {
            onTransform(value)
          }}
          validate={ value => {
            try{
              eval(`const value = ${value}`)
              return true
            }catch(e){
              return false
            }
          }}
        />
      </div>
    )
  }
}

export default Transform
