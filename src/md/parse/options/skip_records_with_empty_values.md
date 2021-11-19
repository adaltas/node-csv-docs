---
title: Option skip_records_with_empty_values
navtitle: skip_records_with_empty_values
description: Option "skip_records_with_empty_values" don't generate records for lines containing empty values.
keywords: ['csv', 'parse', 'options', 'skip_records_with_empty_values', 'columns']
---

# Option `skip_records_with_empty_values`

The `skip_records_with_empty_values` option don't generate records for lines containing empty values (column matching `/\s*/`), empty Buffer or equals to `null` and `undefined` if their value was casted, defaults to `false`.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 1.1.8
* Related: [`skip_empty_lines`](/parse/options/skip_empty_lines/), [`skip_records_with_error`](/parse/options/skip_records_with_error/) &mdash; see [Available Options](/parse/options/#available-options)

## Usage

In [this example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.skip_records_with_empty_values.js), the second line contains empty fields composed of zero characters, spaces and tabs:

`embed:packages/csv-parse/samples/option.skip_records_with_empty_values.js`
