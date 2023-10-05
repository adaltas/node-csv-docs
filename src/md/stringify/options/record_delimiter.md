---
title: Option record_delimiter
navtitle: record_delimiter
description: Prepend the byte order mark (BOM) to the output stream.
keywords: ['csv', 'stringify', 'options', 'bom', 'utf8', 'unicode', 'utf16']
---

# Option `record_delimiter`

The `record_delimiter` option define the characters used to separate each record from one another. 

* Type: `Buffer`, `string`
* Optional
* Default: `\n`
* Since: 0.0.1
* Related: [`delimiter`](/stringify/options/delimiter/), [`eof`](/stringify/options/eof/)  &mdash; see [Available Options](/parse/options/#available-options)

You can pass any value of at least one character in the form of a string or a Buffer. Special values include:

- `unix`: equivalent of `\n`
- `mac`: equivalent of `\r`
- `windows`: equivalent of `\r\n`
- `ascii`: equivalent of `\u001e`
- `unicode`: equivalent of `\u2028`

## History

This option was named `rowDelimiter` until version 4.3.1.

## Example

The default value is the newline ASCII character `\n`. The [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.record_delimiter.js) defines the custom pipe character instead:

`embed:packages/csv-stringify/samples/option.record_delimiter.js`
