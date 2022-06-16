import React, { Component } from 'react'
import Modal from 'react-modal'
import { css } from '@emotion/css'
import {
  TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
// Local
import Tabs from './convert/Tabs'
import Options from './convert/Options'
import Input from './convert/Input'
import Transform from './convert/Transform'
import Output from './convert/Output'

const styles = {
  fullscreen: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  modal: {
    position: 'fixed',
    top: '2rem',
    left: '2rem',
    right: '2rem',
    bottom: '2rem',
    backgroundColor: '#445353',
    padding: '1rem',
    borderRadius: '.4rem',
    overflow: 'auto',
    [TABLET_MEDIA_QUERY]: {
      top: '1rem',
      left: '1rem',
      right: '1rem',
      bottom: '1rem',
    },
    [MOBILE_MEDIA_QUERY]: {
      top: '.5rem',
      left: '.5rem',
      right: '.5rem',
      bottom: '.5rem',
    },
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  }
}

class Convert extends Component {
  constructor(props) {
    super(props)
    this.root = React.createRef()
    this.state = {
      current: 'input',
      options: {},
      input: '',
      fullscreen: false,
    }
  }
  render() {
    const {state} = this
    const {options, input, current, fullscreen, transform} = state
    const onOptions = (options) => {
      this.setState({options: options})
    }
    const content = (
      <div css={styles.fullscreen}>
        <Tabs
          current={current}
          onTab={current => this.setState({current: current})}
          onFullscreen={() => this.setState({fullscreen: !this.state.fullscreen})}
        />
        {current === 'options' && <Options
          css={styles.content}
          fullscreen={fullscreen}
          options={options}
          onOptions={(options) => onOptions(options)} />}
        {current === 'input' && <Input
          css={styles.content}
          fullscreen={fullscreen}
          input={input}
          onInput={input => this.setState({input: input})} />}
        {current === 'transform' && <Transform
          css={styles.content}
          fullscreen={fullscreen}
          transform={transform}
          onTransform={transform => this.setState({transform: transform})} />}
        {current === 'output' && <Output
          css={styles.content}
          fullscreen={fullscreen}
          options={options}
          input={input}
          transform={transform} />}
      </div>
    )
    return (
      <div ref={this.root}>
        { fullscreen ? (
          <Modal
            isOpen={fullscreen}
            appElement={this.root.current}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={e => this.setState({fullscreen: false})}
            className={css([
              styles.modal,
            ])}
            overlayClassName={css([
              styles.overlay,
            ])}
          >
            {content}
          </Modal>
        ) : (
          <>{content}</>
        )}
      </div>
    )
  }
}

export default Convert
