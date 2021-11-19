---
title: Option cast_date
navtitle: cast_date
description: Option "cast_date" alter a field value.
keywords: ['csv', 'parse', 'options', 'cast_date', 'cast', 'context', 'lines', 'quoting']
---

# Option `cast_date`

The `cast_date` option convert the CSV field to a JavaScript date. It requires the `cast` option to be active.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 1.0.5
* Related: [`cast`](/parse/options/cast/), [`info`](/parse/options/info/), [`on_record`](/parse/options/on_record/) &mdash; see [Available Options](/parse/options/#available-options)

The implementation relies on [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse). The CSV value is left untouched if the function returns `NaN`.

## History

This option was named `auto_parse_date` until version 2.

## Usage

When active [`cast_date` with `true`](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.cast_date.js), every field is tested with `Date.parse`. When the convertion to a JavaScript date succeed, the new date is returned. Otherwise, the original value is returned.

`embed:packages/csv-parse/samples/option.cast_date.js`
