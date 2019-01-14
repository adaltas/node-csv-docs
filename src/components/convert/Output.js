import React, {Component} from 'react'
import csv from 'csv/lib/sync'
// Syntax
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/prism-light'
import json from 'react-syntax-highlighter/dist/languages/prism/json'
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism'
registerLanguage('json', json)

const styles = {
  root: {
    flexGrow: '1',
    overflow: 'auto',
  },
  output: {
    minHeight: '400px',
    height: '100%',
    backgroundColor: '#C3D0D0',
    margin: '0 !important',
  },
  fullscreen: {
    minHeight: 'auto',
  },
}

class Output extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {props} = this
    const {fullscreen, input, options} = props
    const opts = {}
    for(let property in options) {
      const option = options[property]
      const value = option.variants[option.variant]
      switch(option.variant){
        case 'function':
          try {
            const ctx= {}
            eval(`ctx.value = ${value}`)
            value = ctx.value
          }
          catch(error) {}
          break
        case 'buffer':
          value = Buffer.from(value)
          break
      }
      opts[property] = value
    }
    let output
    let error
    try{
      output = csv.parse(input, opts)
      output = JSON.stringify(output, null, '  ')
    }catch(e){
      error = e
    }
    return (
      <div css={styles.root}>
        {error ? (
          <p>{error.message}</p>
        ) : (
          <SyntaxHighlighter language="json" style={tomorrow} css={[styles.output, fullscreen && styles.fullscreen]}>
            {output}
          </SyntaxHighlighter>
        )}
      </div>
    )
  }
}

export default Output
