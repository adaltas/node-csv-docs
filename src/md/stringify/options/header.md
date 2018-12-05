---
title: Option header
navtitle: header
description: Display the column names on the first line if the columns option is provided or discovered
keywords: ['csv', 'stringify', 'options', 'header']
sort: 4
---

# Option header

The `header` option generates the column names in the first emitted record. The value is expected to be a boolean value.

This option implies that the knowledge of the columns. Column names can be discovered from the records when those are provided as object. They can also be provided through the [`columns` option](/stringify/options/columns/).

An error will be emitted at runtime if the `header` option is set because no columns are defined nor discovered in the first record. The error message is `Undiscoverable Columns: header option requires column option or object records`.

## With object records

Columns names are automatically discovered from the first record if it is provided as a literal object. In such case, the keys present in the object are used to set the [`columns` option](/stringify/options/columns/).

To activate the generation of a header record, set the value to `true` as in the [header example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.header.js):

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

## With the columns option

The `columns` option may be used conjointly with the `header` option. 

The ["option.header\_columns.js" example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.header_columns.js) shows the behaviour when a record contains a field not declared as an option and when a column is not present in the records. If a record contains a field not declared as a columns, it will simply be discarded like with the `nocolumn` field below. If a column is declared but it is not present in a record, the header will contains the column name and the records will contains a field with an empty value for this column.

```js
const stringify = require('csv-stringify')
const assert = require('assert')

stringify([
  { year: 'XXXX', phone: 'XXX XXXX', nocolumn: 'XXX' },
  { year: 'YYYY', phone: 'YYY YYYY', nocolumn: 'XXX' }
],{
  header: true,
  columns: ['phone', 'year', 'nofield']
}, function(err, data){
  assert.equal(
    data,
    "phone,year,nofield\n" +
    "XXX XXXX,XXXX,\n" +
    "YYY YYYY,YYYY,\n"
  )
})
```

Run this example with the command `node samples/option.header_columns.js`.
