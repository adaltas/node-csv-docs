---
title: Option record_delimiter
navtitle: record_delimiter
description: Option "record_delimiter" indicates how to split a record into multiple fields.
keywords: ['csv', 'parse', 'options', 'record_delimiter', 'separator', 'tsv', 'line break', 'return']
---

# Option `record_delimiter`

The `record_delimiter` option defines one or multiple characters used to delimit records.

The value may be a string or a buffer or an array of both. It can not be empty. By defaults, the record delimiters are auto discovered. Supported auto discovery methods are Linux ("\n"), Apple ("\r") and Windows ("\r\n") record delimiters.

* Type: `string|Buffer|[string|Buffer]`
* Optional
* Default: `[]` (auto discovered)
* Since: 4.0.0
* Related: [`delimiter`](/parse/options/delimiter/), `quote`, [`escape`](/parse/options/escape/) &mdash; see [Available Options](/parse/options/#available-options)

It is not possible to escape a record delimiter. A field must be quoted if it contains a record delimiter which should not be interpreted as such.

## History

Before version 4.0.0, this option was named `rowDelimiter`.

## Single value record delimiter

In the [record delimiter example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.record_delimiter.js), two characters `&&` separate records.

`embed:packages/csv-parse/samples/option.record_delimiter.js`

# Array of record delimiter values

Record delimiter can be made of [multiple values](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.record_delimiter.array.js) when defined as an array:

`embed:packages/csv-parse/samples/option.record_delimiter.array.js`
