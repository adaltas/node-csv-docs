---
title: Option cast
navtitle: cast
description: Option "cast" alter a field value.
keywords: ['csv', 'parse', 'options', 'cast', 'context', 'lines', 'quoting']
---

# Option `cast`

The `cast` option alter a value. It works at the field level of a record. It is possible to transform its value or change its type.

* Type: `function`
* Optional
* Default: `undefined`
* Since: 2.2.0
* Related: `cast_date`, [`info`](/parse/options/info/), [`on_record`](/parse/options/on_record/) &mdash; see [Available Options](/parse/options/#available-options)

Its value is expected to be a function which receive a context rich of information. It gives full control over a field. The [`test/option.cast.coffee`](https://github.com/adaltas/node-csv-parse/blob/master/test/option.cast.coffee) test provides insights on how to use it and its supported functionalities.

## Context

The function is called with 2 arguments: the field value and a context object. The context object expose the following properties:

* `column` (number|string)   
  The column name if the `columns` options is defined or the field position.
* `empty_lines` (number)   
  Internal counter of empty lines encountered until this field.
* `header` (boolean)   
  A boolean indicating if the provided value is a part of the header.
* `index` (number)   
  The field position starting at 0.
* `invalid_field_length` (number)   
  Number of records with a non uniform length when [`relax_column_count`](/parse/options/relax_column_count/) is true. It was named `skipped_lines` until version 3.
* `lines` (number)   
  The number of lines which have been processed including the current line.
* `quoting` (boolean)   
  A boolean indicating if the field was surrounded by quotes.
* `records` (number)   
  The number of records which have been fully parsed. It was named `count` until version 3.

The [cast example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.cast.js) uses the context to transform the first filed into a date and replace the second field with the injected context:

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const data = `
  2000-01-01,date1
  2050-11-27,date2
`.trim()
const records = parse(data, {
  // The cast option exect a function which 
  // is called with two arguments,
  // the parsed value and a context object
  cast: function(value, context){
    // You can return any value
    if(context.index === 0){
      // Such as a string
      return `${value}T05:00:00.000Z`
    }else{
      // Or the `context` object literal
      return context
    }
  },
  trim: true
})
assert.deepStrictEqual(records, [
  [ '2000-01-01T05:00:00.000Z', {
    column: 1, empty_lines: 0, header: false, index: 1, error: undefined,
    invalid_field_length: 0, quoting: false, lines: 1, records: 0
  } ],
  [ '2050-11-27T05:00:00.000Z', {
    column: 1, empty_lines: 0, header: false, index: 1, error: undefined,
    invalid_field_length: 0, quoting: false, lines: 2, records: 1
  } ]
])
```
