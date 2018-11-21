---
title: Option header
navtitle: header
description: Display the column names on the first line if the columns option is provided or discovered
keywords: ['csv', 'stringify', 'options', 'header']
sort: 4
---

# Option header

The `header` option generate the column names as the first emitted record. The value is expected to be a boolean value.

## Default usage

To activate the genration of a header record, set the value to `true` as in the [header example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.header.js):

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
