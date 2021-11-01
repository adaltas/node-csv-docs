---
title: Option delimiter
navtitle: delimiter
description: Option "delimiter" indicates how to split a record into multiple fields.
keywords: ['csv', 'parse', 'options', 'delimiter', 'separator', 'tsv', 'fields', 'records']
---

# Option `delimiter`

Defines the character(s) used to delimitate the fields inside a record. A single value or an array of values are accepted. A value can be a string or a Buffer. It can not be empty, and it can contain several characters. When not defined, the default value is a comma.

* Type: `string|Buffer|[string|Buffer]`
* Optional
* Default: `","` (a one character comma)
* Since: 0.0.1
* Related: `record_delimiter`, `quote`, [`escape`](/parse/options/escape/) &mdash; see [Available Options](/parse/options/#available-options)

In the data, it is not possible to escape a delimiter. A field must be quoted to ensure the delimiter value it contains is not interpreted.

# Example of single-value delimiter

In the [delimiter example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.delimiter.js), fields are separated by a two characters delimiter value.

`embed:csv-parse/samples/option.delimiter.js`

# Example of an array of delimiter values

An example of providing [multiple delimiter values](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.delimiter.array.js) for parsing. Also shows:

* the `columns` option, used for naming the fields of each record
* how `trim` affects whitespace on values
* quoting field values with double-quotes to escape a delimiter
* use of different delimiters in the same record

`embed:csv-parse/samples/option.delimiter.array.js`
