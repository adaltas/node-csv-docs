---
title: Option relax_column_count
navtitle: relax_column_count
description: Option "relax_column_count" tolerates data sets with inconsistent number of fields.
keywords: ['csv', 'parse', 'options', 'relax_column_count', 'columns']
---

# Option `relax_column_count`

The `relax_column_count` option tolerates data sets with inconsistent number of fields between records. By default, an error is thrown if two records have a different number of fields.

Note, this option is completed by the `relax_column_count_less` and `relax_column_count_more` options which behave similarly.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 1.0.6

The option can be used conjointly with the `columns` option. The expected number of fields is determined by the length of the `columns` option, wether it is defined by the user or dynamically discovered.

## Default behavior

The [`option.relax_column_count.js` example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.relax_column_count.js) expect records with 2 fields. The second line contains less than 2 fields and the third line contains more than 2 fields. Both lines would have generated an error if the `relax_column_count` option was not `true`.

```js
const parse = require('csv-parse')
const assert = require('assert')
-->
parse(`
"a 1","a 2"
"b 1"
"c 1","c 2","c 3"
`.trim(), {
  relax_column_count: true
}, function(err, records){
  assert.deepEqual(
    records, [
      ['a 1', 'a 2'],
      ['b 1'],
      ['c 1', 'c 2', 'c 3']
    ]
  )
})
```

## Working with columns and objects

When using the `columns` option, the records are generated as objects whose properties are found in the column option and associated based on their index position. If a record has fewer fields than the number of columns, then the unmatched columns are discarded. Inversely, if a record has more fields than the number of columns, then the unmatched fields are discarded. The [`option.relax_column_count.columns.js` example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.relax_column_count.columns.js) illustrates both behavior:

```js
const parse = require('csv-parse')
const assert = require('assert')

parse(`
lastname,firstname,fullname
Ritchie
Lovelace,Ada,"Augusta Ada King, Countess of Lovelace"
`.trim(), {
  relax_column_count: true,
  columns: true
}, function(err, records){
  assert.deepEqual(
    records, [
      { lastname: 'Ritchie' },
      { lastname: 'Lovelace',
        firstname: 'Ada',
        fullname: 'Augusta Ada King, Countess of Lovelace' }
    ]
  )
})
```

## Handling inconsistent number of fields errors

When used conjointly with other options, it is possible to accept inconsistent records and provide you own parsing implementation. For exemple, the [`on_record`](/parse/options/on_record/) option let you insert your custom code. If needed, the [`raw`](/parse/options/raw/) option expose the raw record. Finally, the full error is available including the error code.

This is an example to [handle inconsistent record field lengths](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.relax_column_count.record_inconsistent_length.js).

```js
const parse = require('csv-parse')
const assert = require('assert')

const records = parse( '1,2\nin:va:lid\n3,4', {
  relax_column_count: true,
  raw: true,
  on_record: ({raw, record}, {error}) => {
    if(error && error.code === 'CSV_INCONSISTENT_RECORD_LENGTH'){
      return raw.trim().split(':')
    } else {
      return record
    }
  }
})
assert.deepEqual(
  records, [
    [ '1', '2' ],
    [ 'in', 'va', 'lid' ],
    [ '3', '4' ]
  ]
)
```

If the [`columns`](/parse/options/on_record/) option is active, the behavior is similar but the error throw is now `CSV_RECORD_DONT_MATCH_COLUMNS_LENGTH`. The `on_record` function can return any value. For example in [the inconsistent columns example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.relax_column_count.record_inconsistent_columns.js), the `columns` option is activated and an array is returned instead of an object literal.

```js
const parse = require('csv-parse')
const assert = require('assert')

const records = parse( '1,2\nin:va:lid\n3,4', {
  columns: ['a', 'b'],
  relax_column_count: true,
  raw: true,
  on_record: ({raw, record}, {error}) => {
    if(error && error.code === 'CSV_RECORD_DONT_MATCH_COLUMNS_LENGTH'){
      return raw.trim().split(':')
    } else {
      return record
    }
  }
})
assert.deepEqual(
  records, [
    { a: '1', b: '2' },
    [ 'in', 'va', 'lid' ],
    { a: '3', b: '4' }
  ]
)
```
