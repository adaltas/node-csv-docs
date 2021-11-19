---
title: Option to_line
navtitle: to_line
description: Option "to_line" handles records until a requested line number.
keywords: ['csv', 'parse', 'options', 'columns']
---

# Option `to_line`

The `to_line` option handles records until a requested line number is reached. It is disabled by default with the value `-1`.

* Type: `number`
* Coercion: `string` to `number`
* Optional
* Default: `-1`
* Validation: positive integer
* Since: 4.0.0
* Related: [`from_line`](/parse/options/from_line/), `from`, `to` &mdash; see [Available Options](/parse/options/#available-options)

The line matching the value is parsed and the record is including the output. If the record does not end on the line, for example when the new line character is escaped or quoted, it will be disregarded.

## Example

This [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.to_line.js) return the first two lines and skip all the following records.

`embed:packages/csv-parse/samples/option.to_line.js`
