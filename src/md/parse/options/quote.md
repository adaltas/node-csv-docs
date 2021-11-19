---
title: Option quote
navtitle: quote
description: Option "quote" defines the characters used to surround a field.
keywords: ['csv', 'parse', 'options', 'objname', 'index', 'position', 'name', 'field']
---

# Option `quote`

The `quote` option defines the characters used to surround a field.

The presence of quotes around the field is optional and is automatically detected. The value can be one or multiple characters. The detection of quotes is disable with the `null`, `false` and empty string values. it defaults to `"` (double quote).

* Type: `string` | `Buffer` | `[string|Buffer]`
* Optional
* Default: `"` (double quote)
* Since: 0.0.1
* Related: [`delimiter`](/parse/options/delimiter/), [`escape`](/parse/options/escape/), [`record_delimiter`](/parse/options/record_delimiter/), [`relax_quotes`](/parse/options/relax_quotes/) &mdash; see [Available Options](/parse/options/#available-options)

## Default behavior

The `quote` option default to `"`. Fields do not need to be quoted as illustrated in [this example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.quote.default.js):

`embed:packages/csv-parse/samples/option.quote.default.js`

## Quotes inside the field

Quote characters present inside a field must be [escaped](/parse/options/escape/). The default escape character is `"`.

[This example contains quotes](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.quote.escape.js) inside the second field:

`embed:packages/csv-parse/samples/option.quote.escape.js`
