import React, {Component} from 'react'
import * as csv from 'csv/browser/esm/sync'
// Syntax
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
SyntaxHighlighter.registerLanguage('json', json)

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
  render() {
    const {props} = this
    const {fullscreen, input, options, transform} = props
    const opts = {}
    for(let property in options) {
      const option = options[property]
      let value = option.variants[option.variant]
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
        case 'array':
        case 'boolean':
        case 'default':
        case 'integer':
        case 'string':
          break
        default:
          throw Error(`Invalid variant: property ${property} value ${options.variant}`)
      }
      opts[property] = value
    }
    let output
    let error
    // Parse
    try{
      output = csv.parse(input, opts)
    }catch(e){
      error = e
    }
    // Transform
    if(transform){
      try {
        const transformCtx= {}
        eval(`transformCtx.value = ${transform}`)
        output = csv.transform(output, transformCtx.value)
      }
      catch(e) {
        error = e
      }
    }
    output = JSON.stringify(output, null, '  ')
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
