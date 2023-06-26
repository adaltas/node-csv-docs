---
title: Option null_if_omitted
navtitle: null_if_omitted
description: Option "null_if_omitted" returns `null` if a field in the CSV is left blank.
keywords: ['csv', 'parse', 'options', 'columns']
---

# Option `null_if_omitted`

The `null_if_omitted` option returns `null` for a CSV field if it is blank. If the `quote` option is enabled and the field only contains quote characters (e.g. `""`) then an empty string is returned.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 5.4.0
* Related: [`quote`](/parse/options/quote/), [`trim`](/parse/options/trim/) &mdash; see [Available Options](/parse/options/#available-options)

Refer to the [`trim`](/parse/options/trim/) documentation to learn about which characters are interpreted as whitespaces.

## Example

This [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.null_if_omitted.js) shows a blank field returning `null` and a field with just quote characters (`""`) returning an empty string.

`embed:packages/csv-parse/samples/option.null_if_omitted.js`
