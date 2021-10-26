---
title: Option header
navtitle: header
description: Display the column names on the first line if the columns option is provided or discovered
keywords: ['csv', 'stringify', 'options', 'header']
---

# Option `header`

The `header` option generates the column names in the first emitted record. The value is expected to be a boolean value.

This option implies that the knowledge of the columns. Column names can be discovered from the records when those are provided as object. They can also be provided through the [`columns` option](/stringify/options/columns/).

An error will be emitted at runtime if the `header` option is set because no columns are defined nor discovered in the first record. The error message is `Undiscoverable Columns: header option requires column option or object records`.

## With object records

Columns names are automatically discovered from the first record if it is provided as a literal object. In such case, the keys present in the object are used to set the [`columns` option](/stringify/options/columns/).

To activate the generation of a header record, set the value to `true` as in the [header example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.header.js):

```js
const stringify = require('csv-stringify')
const assert = require('assert')

stringify([
  { year: 'XXXX', phone: 'XXX XXXX' },
  { year: 'YYYY', phone: 'YYY YYYY' }
],{
  header: true,
  columns: ['year', 'phone']
}, function(err, data){
  assert.equal(
    data,
    "year,phone\n" +
    "XXXX,XXX XXXX\n" +
    "YYYY,YYY YYYY\n"
  )
})
```

Run this example with the command `node samples/option.header.js`.

## Using `header` conjointly with `columns`

In case you wish to output the headers on the first line, you can use this option conjointly with the `header` option. The column definition object can receive an optional [`header` property which default to the `key` property](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.header_with_columns_array_strings.js):

```js
stringify( [
  { a: '1', b: '2' }
], {
  header: true,
  columns: [ { key: 'a', header: 'col_a' }, { key: 'b', header: 'col_b' } ]
}, function(err, data){
  assert.equal(data, 'col_a,col_b\n1,2\n')
})
```

This example could have been simplified by defining the [column option as an object](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.header_width_columns_object.js). This approach is not recommended as it implies relying on object property order which JavaScript doesn't guarantee.

```js
stringify( [
  { a: '1', b: '2' }
], {
  header: true,
  columns: { 'a': 'col_a', 'b': 'col_b' }
}, function(err, data){
  assert.equal(data, 'col_a,col_b\n1,2\n')
})
```
