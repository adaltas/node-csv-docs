---
title: Option delimiter
navtitle: delimiter
description: Set the delimiter between fields of a record
keywords: ['csv', 'stringify', 'options', 'delimiter']
---

# Option `delimiter`

The `delimiter` option set the delimiter between the fields of a record. It can be one or multiple characters. The default value is a comma `,`.

* Type: `string|Buffer`
* Optional
* Default: `","` (a one character comma)
* Since: 0.0.1
* Related: `record_delimiter`, `quote`, `escape` &mdash; see [Available Options](/parse/options/#available-options)

## Default behavior

By default the generated CSV data set has [fields separated by commas `,`](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.delimiter_single.js):

`embed:packages/csv-stringify/samples/option.delimiter_single.js`

## Custom behaviour

One or multiple characters can be defined to [customise the field delimiter](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.delimiter_multiple.js):

`embed:packages/csv-stringify/samples/option.delimiter_multiple.js`
