---
title: Option skip_records_with_error
navtitle: skip_records_with_error
description: Option "skip_records_with_error" skip to the next line if a parsing error occurred.
keywords: ['csv', 'parse', 'options', 'skip_records_with_error', 'columns']
---

# Option `skip_records_with_error`

The `skip_records_with_error` option tolerates parsing errors. It skips the records containing an error inside and directly go process the next record.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 1.0.6
* Related: [`skip_empty_lines`](/parse/options/skip_empty_lines/), [`skip_records_with_empty_values`](/parse/options/skip_records_with_empty_values/) &mdash; see [Available Options](/parse/options/#available-options)

Be careful, this functionality can not suit every data set. It implies a good knowledge in your data in the sense that you must be confident that no field contains any record delimiters. By nature, CSV fields can contains records delimiters if quoted. On error, the parser has no indication to know if a record delimiter is one or if it is inside a quoted field or not. Thus, using this option confidently implies that your fields do not contain any records delimiter inside.

A `skip` event is emitted when an error is found and when the record is skipped. The `error` object is passed as the first argument of the event callback and it can expose additional information depending on the type of errors. The [error documentation](/parse/errors/) list of the error types as well as the contextual properties they expose.

## Listening to the `skip` event

The [`option.skip_records_with_error.js` example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.skip_records_with_error.js) catch an invalid closing quote error and continue parsing the next records.

`embed:packages/csv-parse/samples/option.skip_records_with_error.js`
