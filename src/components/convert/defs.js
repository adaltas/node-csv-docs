import React from 'react'


const styles = {
  cast_function: {
    width: '100%',
  },
}

const defs = {
  cast: {
    label: 'cast',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"No casting will occur by default."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) => <input
          type="checkbox"
          defaultChecked={value}
          onChange={function(e){onChange(!!e.target.checked)}}
          {...props}
        />
      },
      'function': {
        label: 'function',
        value: '',
        form: ({state, props, value, onChange}) => <textarea
          css={styles.cast_function}
          defaultValue={value}
          onChange={function(e){
            // try {
            //   const ctx= {}
            //   eval(`ctx.value = ${e.target.value}`)
            //   onChange(ctx.value)
            // }
            // catch(error) {}
            onChange(e.target.value)
          }}
          {...props}
        />
      }
    }
  },
  columns: {
    label: 'columns',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Records are generated as arrays instead of object literals."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <input
            type="checkbox"
            defaultChecked={value}
            onChange={function(e){onChange(!!e.target.checked)}}
            {...props}
          />
      },
      'array': {
        label: 'array',
        value: [],
        form: ({state, props, value, onChange}) =>
          <textarea
            css={styles.cast_function}
            defaultValue={typeof value === 'string' ? value : JSON.stringify(value)}
            onChange={function(e){
              try {
                const ctx= {}
                eval(`ctx.value = ${e.target.value}`)
                onChange(ctx.value)
              }
              catch(error) {}
            }}
            {...props}
          />
      },
      'function': {
        label: 'function',
        value: function(record){ return record },
        form: ({state, props, value, onChange}) =>
          <textarea
            css={styles.cast_function}
            defaultValue={value.toString()}
            onChange={function(e){
              // try {
              //   const ctx= {}
              //   eval(`ctx.value = ${e.target.value}`)
              //   onChange(ctx.value)
              // }
              // catch(error) {}
              onChange(e.target.value)
            }}
            {...props}
          />
      }
    }
  },
  comment: {
    label: 'comment',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Records are generated as arrays instead of object literals."}</p>
      },
      'string': {
        label: 'string',
        value: '',
        form: ({state, props, value, onChange}) =>
          <input
            css={styles.cast_function}
            defaultValue={value}
            onChange={function(e){
              onChange(e.target.value)
            }}
            {...props}
          />
      },
      // 'buffer': {
      //   label: 'buffer',
      //   value: Buffer.from(''),
      //   form: ({state, props, value, onChange}) =>
      //     <>
      //       <select>
      //         <option>base64</option>
      //         <option>hex</option>
      //       </select>
      //       <input
      //         css={styles.cast_function}
      //         defaultValue={value}
      //         onChange={function(e){
      //           onChange(Buffer.from(e.target.value, 'base64'))
      //         }}
      //         {...props}
      //       />
      //     </>
      // }
    }
  },
  delimiter: {
    label: 'delimiter',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Records are generated as arrays instead of object literals."}</p>
      },
      'string': {
        label: 'string',
        value: ',',
        form: ({state, props, value, onChange}) =>
          <input
            css={styles.cast_function}
            defaultValue={value}
            onChange={function(e){
              onChange(e.target.value)
            }}
            {...props}
          />
      },
      // 'buffer': {
      //   label: 'buffer',
      //   value: Buffer.from(','),
      //   form: ({state, props, value, onChange}) =>
      //     <>
      //       <select>
      //         <option>base64</option>
      //         <option>hex</option>
      //       </select>
      //       <input
      //         css={styles.cast_function}
      //         defaultValue={value}
      //         onChange={function(e){
      //           onChange(Buffer.from(e.target.value, 'base64'))
      //         }}
      //         {...props}
      //       />
      //     </>
      // }
    }
  },
  escape: {
    label: 'escape',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"The default escape character is a double quote `\".`"}</p>
      },
      'string': {
        label: 'string',
        value: '"',
        form: ({state, props, value, onChange}) =>
          <input
            css={styles.cast_function}
            defaultValue={value}
            onChange={function(e){
              onChange(e.target.value)
            }}
            {...props}
          />
      },
      // 'buffer': {
      //   label: 'buffer',
      //   value: Buffer.from(''),
      //   form: ({state, props, value, onChange}) =>
      //     <>
      //       <select>
      //         <option>base64</option>
      //         <option>hex</option>
      //       </select>
      //       <input
      //         css={styles.cast_function}
      //         defaultValue={value}
      //         onChange={function(e){
      //           onChange(Buffer.from(e.target.value, 'base64'))
      //         }}
      //         {...props}
      //       />
      //     </>
      // }
    }
  },
  from: {
    label: 'from',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Handle records from the first record of the dataset."}</p>
      },
      'integer': {
        label: 'integer',
        value: 0,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              css={styles.cast_function}
              defaultValue={value}
              onChange={function(e){
                onChange(e.target.value)
              }}
              {...props}
            />
            <p>The value must be a valid integer greater than zero.</p>
          </>
      },
    },
  },
  from_line: {
    label: 'from_line',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Handle records from the first line."}</p>
      },
      'integer': {
        label: 'integer',
        value: 0,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              css={styles.cast_function}
              defaultValue={value}
              onChange={function(e){
                onChange(e.target.value)
              }}
              {...props}
            />
            <p>The value must be a valid integer greater than zero.</p>
          </>
      },
    },
  },
  info: {
    label: 'info',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Records dont contain information in the output."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
          <p>If checked, records will contains the `info` and the `record` properties.</p>
          </>
      },
    },
  },
  ltrim: {
    label: 'ltrim',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Whitespaces and tabs will be preserved on the left side."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
          <p>If checked, whitespaces and tabs on the left side will be removed.</p>
          </>
      },
    },
  },
  max_record_size: {
    label: 'max_record_size',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"No check is made by default on the record size."}</p>
      },
      'integer': {
        label: 'integer',
        value: 0,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              css={styles.cast_function}
              defaultValue={value}
              onChange={function(e){
                onChange(e.target.value)
              }}
              {...props}
            />
            <p>Indicate the maximum record size in bytes.</p>
          </>
      },
    },
  },
  objname: {
    label: 'objname',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"The option is disabled by default."}</p>
      },
      'string': {
        label: 'string',
        value: '',
        form: ({state, props, value, onChange}) =>
          <input
            css={styles.cast_function}
            defaultValue={value}
            onChange={function(e){
              onChange(e.target.value)
            }}
            {...props}
          />
      },
      // 'buffer': {
      //   label: 'buffer',
      //   value: Buffer.from(''),
      //   form: ({state, props, value, onChange}) =>
      //     <>
      //       <select>
      //         <option>base64</option>
      //         <option>hex</option>
      //       </select>
      //       <input
      //         css={styles.cast_function}
      //         defaultValue={value}
      //         onChange={function(e){
      //           onChange(Buffer.from(e.target.value, 'base64'))
      //         }}
      //         {...props}
      //       />
      //     </>
      // }
    },
  },
  quote: {
    label: 'quote',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Fields are not quoted by default."}</p>
      },
      'string': {
        label: 'string',
        value: '',
        form: ({state, props, value, onChange}) =>
          <input
            css={styles.cast_function}
            defaultValue={value}
            onChange={function(e){
              onChange(e.target.value)
            }}
            {...props}
          />
      },
      // 'buffer': {
      //   label: 'buffer',
      //   value: Buffer.from(''),
      //   form: ({state, props, value, onChange}) =>
      //     <>
      //       <select>
      //         <option>base64</option>
      //         <option>hex</option>
      //       </select>
      //       <input
      //         css={styles.cast_function}
      //         defaultValue={value}
      //         onChange={function(e){
      //           onChange(Buffer.from(e.target.value, 'base64'))
      //         }}
      //         {...props}
      //       />
      //     </>
      // }
    },
  },
  raw: {
    label: 'raw',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Raw information are not exported by default."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
          <p>If checked, records will contains the `raw` and the `record` properties.</p>
          </>
      },
    },
  },
  relax: {
    label: 'relax',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Quoted present inside unquoted fields are originally not supported."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
          <p>If checked, unquoted fields containing quotes will be tolerated.</p>
          </>
      },
    },
  },
  relax_column_count: {
    label: 'relax_column_count',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Every records must contains the exact same amount of fields by default."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
          <p>If checked, records with variable fields length will be accepted.</p>
          </>
      },
    },
  },
  record_delimiter: {
    label: 'record_delimiter',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"The default record delimiter is automatically discovered by default."}</p>
      },
      'string': {
        label: 'string',
        value: '',
        form: ({state, props, value, onChange}) =>
          <input
            css={styles.cast_function}
            defaultValue={value}
            onChange={function(e){
              onChange(e.target.value)
            }}
            {...props}
          />
      },
      // 'buffer': {
      //   label: 'buffer',
      //   value: Buffer.from(''),
      //   form: ({state, props, value, onChange}) =>
      //     <>
      //       <select>
      //         <option>base64</option>
      //         <option>hex</option>
      //       </select>
      //       <input
      //         css={styles.cast_function}
      //         defaultValue={value}
      //         onChange={function(e){
      //           onChange(Buffer.from(e.target.value, 'base64'))
      //         }}
      //         {...props}
      //       />
      //     </>
      // }
    },
  },
  rtrim: {
    label: 'rtrim',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Whitespaces and tabs will be preserved on the right side."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
          <p>If checked, whitespaces and tabs on the right side will be removed.</p>
          </>
      },
    },
  },
  skip_empty_lines: {
    label: 'skip_empty_lines',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Empty lines are not tolerated by default."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
            <p>If checked, empty lines will be disregarded and no error will occur.</p>
          </>
      },
    },
  },
  skip_lines_with_error: {
    label: 'skip_lines_with_error',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Processing will stop if an error is encountered."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
            <p>If checked, no error will be thrown and the processing will continue.</p>
          </>
      },
    },
  },
  skip_lines_with_empty_values: {
    label: 'skip_lines_with_empty_values',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Empty lines inside the dataset are treated as a valid record which will often result in an error."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
          <p>If checked, empty lines will simply be disregarded.</p>
          </>
      },
    },
  },
  to: {
    label: 'to',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Handle records until the last record of the dataset."}</p>
      },
      'integer': {
        label: 'integer',
        value: 0,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              css={styles.cast_function}
              defaultValue={value}
              onChange={function(e){
                onChange(e.target.value)
              }}
              {...props}
            />
            <p>The value must be a valid integer greater than zero.</p>
          </>
      },
    },
  },
  to_line: {
    label: 'to_line',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Handle records until the last line."}</p>
      },
      'integer': {
        label: 'integer',
        value: 0,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              css={styles.cast_function}
              defaultValue={value}
              onChange={function(e){
                onChange(e.target.value)
              }}
              {...props}
            />
            <p>The value must be a valid integer greater than zero.</p>
          </>
      },
    },
  },
  trim: {
    label: 'trim',
    variant: 'default',
    variants: {
      'default': {
        label: 'default',
        form: () => <p>{"Whitespaces and tabs will be preserved on both sides."}</p>
      },
      'boolean': {
        label: 'boolean',
        value: false,
        form: ({state, props, value, onChange}) =>
          <>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={function(e){onChange(!!e.target.checked)}}
              {...props}
            />
          <p>If checked, whitespaces and tabs on both sides will be removed.</p>
          </>
      },
    },
  },
}

export default defs;
