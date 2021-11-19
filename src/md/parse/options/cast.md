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

Its value is a function which receives a context rich of information.

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

The [cast example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.cast.js) uses the context to transform the first filed into a date and replace the second field with the injected context:

`embed:packages/csv-parse/samples/option.cast.js`

## Using the `cast` and `columns` functions conjointly

The `cast` function is called field by field, whether it is considered a header or not. The `columns` function is called once the first record is created (if treated as a header). For this reason, `cast` is executed before `columns`.

To distinguish a header field from a data field in the `cast` function, use the [`context.header` property](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.cast.header.column.fn.js) in the second argument of the `cast` function:

`embed:packages/csv-parse/samples/option.cast.header.column.fn.js`

Note, the above example can be rewritten to implement the [`columns` transformation directly inside `cast`](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.cast.header.column.true.js), by setting `columns: true` and by replacing `if(context.header) return value;` by `if(context.header) return value.toUpperCase();`:

`embed:packages/csv-parse/samples/option.cast.header.columns.true.js`
