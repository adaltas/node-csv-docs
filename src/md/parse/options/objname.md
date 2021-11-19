---
title: Option objname
navtitle: objname
description: Option "objname" associates records using one of the fields as keys.
keywords: ['csv', 'parse', 'options', 'objname', 'index', 'position', 'name', 'field']
---

# Option `objname`

The `objname` option associates records using one of the fields as keys.

With the `columns` option, the field is identified by its column name. It must be a string or a buffer. Without the `column` option, the field is identified by its index position. It must be a number.

* Type: `string` | `Buffer` | `number`
* Optional
* Default: `undefined`
* Since: early days
* Related: [`column`](/parse/options/column/), [`info`](/parse/options/info/), [`raw`](/parse/options/raw/) &mdash; see [Available Options](/parse/options/#available-options)

The option is compatible with the `raw` and `info` options.

## As a column name

Field names reference one of the record property. Thus, they require the usage of the column option to generate records as object literal instead of array.

Below, [the `objname` option is a string](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.objname.column.js) and it defines the `c1` column:

`embed:packages/csv-parse/samples/option.objname.column.js`

## As an index name

Index names reference a record field by its position. Thus, records must be generated as arrays.

Below, [the `objname` option is a number](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.objname.index.js) and it defined the field in the second postion at index `1`:

`embed:packages/csv-parse/samples/option.objname.index.js`
