---
title: Option columns
navtitle: columns
description: Option "columns" generate records as object literals instead of arrays.
keywords: ['csv', 'parse', 'options', 'columns']
---

# Option `columns`

The `columns` option generates record in the form of object literals.

* Type: `boolean` | `array` | `function`
* Optional
* Default: `false`
* Since: early days

By default, the parser generates records in the form of arrays. Its associate value may takes multiple forms:

* [`true`](#as-true)    
  Infer the columns names from the first line.
* [`array`](#as-an-array)    
  Declare the column definition before processing the data.
* [`function`](#as-a-function)   
  Obtain the columns definition dynamically from the user.

It is possible to skip one or multiple fields by passing the value equal to `undefined`, `null` or `false` in the definition array.

## As true

If the value is `true`, the first record present in the data set is treated as a header. No record is generated and each field defines a new property.

The [columns example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.columns.true.js) generates record literals whose properties match the first line of the data set.

```js
const parse = require('csv-parse')
const assert = require('assert')

parse(`
"key_1","key_2"
"value 1","value 2"
`.trim(), {
  columns: true
}, function(err, records){
  assert.deepEqual(
    records, [{
      key_1: 'value 1',
      key_2: 'value 2'
    }]
  )
})
```

## As an array

If the value is an array, to each element corresponds a property. The values may be a string or an object literal with the `name` property.

The [columns example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.columns.array.js) generates record literals whose properties match the values of `columns` option.

```js
const parse = require('csv-parse')
const assert = require('assert')

parse(`
"value 1","value 2"
`.trim(), {
  columns: ['key_1', 'key_2']
}, function(err, records){
  assert.deepEqual(
    records, [{
      key_1: 'value 1',
      key_2: 'value 2'
    }]
  )
})
```

## As a function

If the value is a function, the user is responsible for returning the list of columns.  The first line is treated as a header and will not generate a record. The function receives the first line as a list of fields.

The [columns example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.columns.function.js) converts each field of the first to upper case.

```js
const parse = require('csv-parse')
const assert = require('assert')

parse(`
"key_1","key_2"
"value 1","value 2"
`.trim(), {
  columns: header =>
    header.map( column => column.toUpperCase() )
}, function(err, records){
  assert.deepEqual(
    records, [{
      KEY_1: 'value 1',
      KEY_2: 'value 2'
    }]
  )
})
```
