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
* Related: [`record_delimiter`](/parse/options/record_delimiter/), [`quote`](/parse/options/quote/), [`escape`](/parse/options/escape/) &mdash; see [Available Options](/parse/options/#available-options)

It is not possible to escape a delimiter. A field must be quoted if it contains a delimiter which should not be interpreted as such.

## Single value delimiter

In the [delimiter example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.delimiter.js), fields are separated by a two characters delimiter value.

`embed:packages/csv-parse/samples/option.delimiter.js`

## Array of delimiter values

Delimiter can be made of [multiple values](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.delimiter.array.js) when defined as an array:

`embed:packages/csv-parse/samples/option.delimiter.array.js`
