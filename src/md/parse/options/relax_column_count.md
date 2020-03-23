---
title: Option relax_column_count
navtitle: relax_column_count
description: Option "relax_column_count" tolerates data sets with inconsistent number of fields.
keywords: ['csv', 'parse', 'options', 'relax_column_count', 'columns']
---

# Option `relax_column_count`

The `relax_column_count` option tolerates data sets with inconsistent number of fields between records. By default, an error is thrown if two records have a different number of fields.

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
