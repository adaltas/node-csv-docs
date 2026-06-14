---
title: Option record_delimiter
navtitle: record_delimiter
description: Option "record_delimiter" indicates how to split a record into multiple fields.
keywords:
  - csv
  - parse
  - options
  - record_delimiter
  - separator
  - tsv
  - line break
---

# Option `record_delimiter`

The `record_delimiter` option defines one or multiple characters used to delimit records.

The value may be a string or a buffer or an array of both. It can not be empty. By defaults, the record delimiters are auto discovered. Supported auto discovery methods are Linux (`\n`), Apple (`\r`) and Windows (`\r\n`) record delimiters.

- Type: `string|Buffer|[string|Buffer]`
- Optional
- Default: `[]` (auto discovered)
- Since: 4.0.0
- Related: [`delimiter`](/parse/options/delimiter/), `quote`, [`escape`](/parse/options/escape/) &mdash; see [Available Options](/parse/options/#available-options)

It is not possible to escape a record delimiter. A field must be quoted if it contains a record delimiter which should not be interpreted as such.

## History

Before version 4.0.0, this option was named `rowDelimiter`.

## Automatic discovery

When the `record_delimiter` option is not defined, the parser automatically discovers the record delimiter from the first one encountered in the source. Auto discovery only applies outside of quoted fields.

The following record delimiters are recognized and tested in this order:

| Platform                     | Delimiter | Description                   |
| ---------------------------- | --------- | ----------------------------- |
| Windows                      | `\r\n`    | carriage return and line feed |
| Unix / Linux                 | `\n`      | line feed                     |
| Apple (Mac OS 9 and earlier) | `\r`      | carriage return               |

The Windows delimiter (`\r\n`) is tested before the legacy Apple delimiter (`\r`) so that a `\r\n` sequence is never mistaken for a lone `\r` followed by an empty line.

Once a record delimiter is discovered, it is used for the remainder of the parsing. Subsequent records are expected to use the same delimiter; a different line ending appearing later in the source is not treated as a record delimiter.

## Single value record delimiter

In the [record delimiter example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.record_delimiter.js), two characters `&&` separate records.

`embed:packages/csv-parse/samples/option.record_delimiter.js`

# Array of record delimiter values

Record delimiter can be made of [multiple values](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.record_delimiter.array.js) when defined as an array:

`embed:packages/csv-parse/samples/option.record_delimiter.array.js`
