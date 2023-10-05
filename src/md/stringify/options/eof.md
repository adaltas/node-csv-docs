---
title: Option oef
navtitle: eof
description: Set the document last characters after the last records.
keywords: ['csv', 'stringify', 'options', 'eof']
---

# Option `eof`

The `eof` option append the value of the `record_delimiter` option after the last record. It is enabled by default.

* Type: `boolean`
* Optional
* Default: `true`
* Since: 0.0.2
* Related: [`record_delimiter`](/stringify/options/record_delimiter/) &mdash; see [Available Options](/parse/options/#available-options)

## Default behavior

By default, the `eof` option is [enabled](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.eof_true.js). Not defining its value is equivelent set seting `eof` as `true`:

`embed:packages/csv-stringify/samples/option.eof_true.js`

## Disabling the behavior

Set the [`eof` value to false](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.eof_false.js) to not append extra characters after the last record:

`embed:packages/csv-stringify/samples/option.eof_false.js`
