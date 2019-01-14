import React, {Component} from 'react'

const styles = {
  root: {
    flexGrow: '1',
  },
  input: {
    border: '1px solid #fff',
    boxShadow: 'inset 2px 2px 5px rgba(0,0,0,.3)',
    borderRadius: '.2rem',
    minHeight: '400px',
    height: '100%',
    width: '100%',
    backgroundColor: '#C3D0D0',
    padding: '.4rem',
    resize: 'none',
  },
  fullscreen: {
    minHeight: 'auto',
  },
}

class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {state, props} = this
    const {fullscreen, input, onInput} = props
    // <div css={{
    //   width: '200px',
    //   height: '200px',
    //   background: 'red',
    //   padding: '20px',
    //   display: 'flex',
    //   alignContent: 'stretch',
    //   alignItems: 'stretch',
    // }}>
    //   <div css={{
    //     background: 'blue',
    //     padding: '20px',
    //     width: '100%',
    //   }}>1
    //   </div>
    //     <div css={{
    //       background: 'blue',
    //       padding: '20px',
    //       width: '100%',
    //     }}>2
    //     </div>
    // </div>
    return (
      <div css={styles.root}>
        <textarea
          css={[styles.input, fullscreen && styles.fullscreen]}
          onChange={ e => onInput(e.target.value) }
          value={input}
        />
      </div>
    )
  }
}

export default Input
