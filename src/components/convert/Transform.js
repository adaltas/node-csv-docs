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
    padding: '.2rem',
    resize: 'none',
  },
  fullscreen: {
    minHeight: 'auto',
  },
  error: {
    border: '1px solid red',
  },
}

class Transform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }
  render() {
    const {state, props} = this
    const {error} = state
    const {fullscreen, onTransform, transform} = props
    return (
      <div css={styles.root}>
        <textarea
          css={[styles.input, fullscreen && styles.fullscreen, error && styles.error]}
          value={transform}
          onChange={ e => {
            const value = e.target.value
            try{
              eval(`const value = ${value}`)
              this.setState({error: false})
              onTransform(value)
            }catch(e){
              this.setState({error: true})
            }
          }}
        />
      </div>
    )
  }
}

export default Transform
