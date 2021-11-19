---
title: Option on_record
navtitle: on_record
description: Option "on_record" alter a record before producing it.
keywords: ['csv', 'parse', 'options', 'transform', 'alter', 'filter', 'field']
---

# Option `on_record`

The `on_record` option provides an option to alter and filter records. It expects a function which receives the record and a context as arguments and which returns the new altered record or nothing if the record is to be filtered.

* Type: `function`
* Optional
* Default: `undefined`
* Since: 4.7.0
* Related: [`cast`](/parse/options/cast/), [`info`](/parse/options/info/) &mdash; see [Available Options](/parse/options/#available-options)

This option works at the record level. It complements the `cast` option which is adapted to field-level transformations. Also, the [stream-transform](/transform/) package provides more advanced control on the record and stream of records with asynchronous execution and concurrent control.

## Use cases

Use this option to filter, enrich, and apply any transformations on a record.

## Usage

The option takes a function which is called with two arguments: the input record and the context. The return value is the new record or is filtered if `null` or `undefined` are returned.

## Altering records

In the [alter example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.on_record.alter.js), for every record, the second field is stripped out and the two other fields are re-ordered.

`embed:packages/csv-parse/samples/option.on_record.alter.js`

## Filtering records

In the [filter example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.on_record.filter.js), the function returns `null` for the second record, filtering it from the result.

`embed:packages/csv-parse/samples/option.on_record.filter.js`

## Handling inconsistent number of fields

It is possible to handle records with inconsistent number of fields. When used conjointly with the [`relax_column_count`](/parse/options/relax_column_count/) option, the `on_record` option is called unless the [`skip_records_with_error`](/parse/options/skip_records_with_error/) is activated.

The [`relax_column_count`](/parse/options/relax_column_count/) documentation provide more information as well as examples.

## Error behaviour

Errors throw inside the `on_record` function are caught and handled as any other errors.

They won't be honoured by the [`skip_records_with_error` option](/parse/options/skip_records_with_error/). The "error" in `skip_records_with_error` must be interpreted as a parsing error and not as a user thrown error.
