---
title: Option skip_empty_lines
navtitle: skip_empty_lines
description: Option "skip_empty_lines" skips any line which is empty.
keywords: ['csv', 'parse', 'options', 'skip_empty_lines', 'columns']
---

# Option `skip_empty_lines`

The `skip_empty_lines` skips any line which is empty.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 0.0.5
* Related: [`skip_records_with_error`](/parse/options/skip_records_with_error/), [`trim`](/parse/options/trim/) &mdash; see [Available Options](/parse/options/#available-options)

## Example

The [`option.skip_empty_line.js` example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.skip_empty_lines.js) activates the option by setting its value to `true`:

`embed:packages/csv-parse/samples/option.skip_empty_lines.js`

## Whitespace characters

The line must be completely empty, without any characters including spaces and tabs. If you happens to have such characters, you can [associate the `skip_empty_lines` option with the `trim` option](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.skip_empty_lines.trim.js):

`embed:packages/csv-parse/samples/option.skip_empty_lines.trim.js`

Another possibility includes using a combination of [`skip_records_with_empty_values`](csv-parse/samples/option.skip_records_with_empty_values.js) and [`relax_column_count`](csv-parse/samples/option.relax_column_count.js).
