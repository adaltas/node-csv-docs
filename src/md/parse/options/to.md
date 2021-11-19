---
title: Option to
navtitle: to
description: Option "to" handles records starting after a requested number of records.
keywords: ['csv', 'parse', 'options', 'to', 'count', 'records', 'info']
---

# Option `to`

The `to` option handles records until a requested number of records. Count is 1-based, for example, provides 1 (and not 0) to emit first record.

* Type: `number`
* Coercion: `string` to `number`
* Optional
* Default: `1`
* Validation: positive integer
* Since: 4.0.0
* Related: [`info`](/parse/options/to_line/), [`from`](/parse/options/from/), [`to_line`](/parse/options/to_line/) &mdash; see [Available Options](/parse/options/#available-options)

## Inferred column names

When the `column` option is active, the first record is treated as a header. It is not accounted as a record. Thus, the first record is used to retrieve the properties names and the count start after the next record.

This [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.to.js) read the first `a,b` record to determine column names, return the first two records and skip the records afterward.

`embed:packages/csv-parse/samples/option.to.js`
