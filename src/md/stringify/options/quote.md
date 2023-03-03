---
title: Option quote
navtitle: quote
description: Quote empty fields.
keywords: ['csv', 'stringify', 'options', 'quote', 'delimiter', 'escape']
---

# Option `quote`

The quote option defines the characters surrounding a field, defaults to the `"` (double quotation marks).

It is possible to disable quoting by setting the option value to `false` or an empty string. The setting applies at any time, whether it contains a special character or not. 

* Type: `string|Buffer|boolean`
* Optional
* Default: `"`
* Since: 0.0.1
* Related: [`quoted_empty`](/stringify/options/quoted_empty/), [`quoted_match`](/stringify/options/quoted_match/), [`quoted_string`](/stringify/options/quoted_string/), [`quoted`](/stringify/options/quoted/)  &mdash; see [Available Options](/stringify/options/#available-options)

## Example

The [custom quote example](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/samples/option.quote.custom.js) defines a custom value. The output field is surrounded with the pipe character because it contains a comma which is the default field separator.

`embed:packages/csv-stringify/samples/option.quote.custom.js`
