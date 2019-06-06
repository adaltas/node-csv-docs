import React, {Component} from 'react'
import {
  TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
import defs from './defs'

const arrow = '214646'
const styles = {
  root: {
    flexGrow: '1',
    overflow: 'auto',
    '& p': {
      margin: 0,
    }
  },
  option: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  option_label: {
    width: '20%',
    padding: '.5rem 0',
    [TABLET_MEDIA_QUERY]: {
      width: '30%',
      // borderRight: 'none',
    },
    [MOBILE_MEDIA_QUERY]: {
      width: '50%',
      // borderRight: 'none',
    },
  },
  option_type: {
    width: '20%',
    padding: '.5rem',
    borderLeft: '1px solid #fff',
    '& select': {
      // see https://codepen.io/anon/pen/JwOpXY
      backgroundColor: '#ACC1C1',
      backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20448%22%20enable-background%3D%22new%200%200%20256%20448%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.arrow%7Bfill%3A%23${arrow}%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22arrow%22%20d%3D%22M255.9%20168c0-4.2-1.6-7.9-4.8-11.2-3.2-3.2-6.9-4.8-11.2-4.8H16c-4.2%200-7.9%201.6-11.2%204.8S0%20163.8%200%20168c0%204.4%201.6%208.2%204.8%2011.4l112%20112c3.1%203.1%206.8%204.6%2011.2%204.6%204.4%200%208.2-1.5%2011.4-4.6l112-112c3-3.2%204.5-7%204.5-11.4z%22%2F%3E%3C%2Fsvg%3E%0A")`,
      backgroundPosition: 'right 10px center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 50%',
      borderRadius: '.2rem',
      border: '1px solid #fff',
      color: '#214646',
      padding: '0 30px 0 10px',
      // disable default appearance
      // outline: 'none',
      '-mozAppearance': 'none',
      '-webkitAppearance': 'none',
      appearance: 'none',
      '::-ms-expand': {
        display: 'none',
      },
    },
    [TABLET_MEDIA_QUERY]: {
    },
    [MOBILE_MEDIA_QUERY]: {
      width: '50%',
      padding: '.5rem 0 .5rem 0',
      // marginLeft: '0',
      borderLeft: 'none',
    },
  },
  option_variant: {
    width: '60%',
    padding: '.5rem 0',
    '& input': {
      padding: '0',
    },
    '& textarea': {
      resize: 'vertical',
    },
    [TABLET_MEDIA_QUERY]: {
      marginLeft: '30%',
      borderLeft: '1px solid #fff',
      padding: '0 .5rem .5rem .5rem',
    },
    [MOBILE_MEDIA_QUERY]: {
      width: '100%',
      marginLeft: '0',
      borderLeft: 'none',
      borderBottom: '1px solid #fff',
      padding: '0 0 .5rem 0',
    },
  },
  // option_label: {
  //   flex: '1',
  //   [TABLET_MEDIA_QUERY]: {
  //     flex: '0 0 30%',
  //   },
  // },
  // option_type: {
  //   flex: '1',
  //   [TABLET_MEDIA_QUERY]: {
  //     flex: '0 0 70%',
  //   },
  // },
  // option_variant: {
  //   flex: '1',
  //   [TABLET_MEDIA_QUERY]: {
  //     flex: '0 0 100%',
  //   },
  // },
}

class Options extends Component {
  constructor(props) {
    super(props)
    const options = props.options
    for(let property in defs){
      const def = defs[property]
      if(options[property] === undefined){
        options[property] = {
          variant: def.variant,
          variants: {}
        }
        options[property].variants[def.variant] = def.variants[def.variant].value
      }
      
    }
    this.state = {
      defs: defs,
      options: options
    }
  }
  render() {
    const {state, props} = this
    const {options} = this.state
    return (
    <div css={styles.root}>
      {
        Object.keys(state.defs).map( property => {
          const def = state.defs[property]
          const option = options[property]
          const onType = (e) => {
            const variant = e.target.value
            option.variant = variant
            if(option.variants[variant] === undefined){
              option.variants[variant] = def.variants[variant].value
            }
            this.setState({options: options})
            props.onOptions(options)
          }
          return(
          <div css={styles.option} key={property}>
            <label css={styles.option_label}>{def.label}</label>
            <div css={styles.option_type}>
              <select
                defaultValue={option.variant}
                onChange={onType}
              >
                {(function(){
                  return Object.keys(def.variants).map( (variant) => 
                    <option key={`${property}-type-${variant}`}>
                      {def.variants[variant].label}
                    </option>
                  )
                }())}
              </select>
            </div>
            <div css={styles.option_variant}>
              {(function(){
                const variantDef = def.variants[option.variant]
                const onChange = (value) => {
                  const {options} = this.state
                  option.variants[option.variant] = value
                  this.setState({options: options})
                  props.onOptions(options)
                }
                if(variantDef.form){
                  return variantDef.form.call( null, {
                    state: state,
                    value: option.variants[option.variant],
                    onChange: onChange,
                    props: {
                      key: `${property}-${def.variant}`
                    }
                  })
                }
              }.call(this))}
            </div>
          </div>
        )})
      }
    </div>
    )
  }
}

export default Options
