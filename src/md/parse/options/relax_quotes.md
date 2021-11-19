---
title: Option relax_quotes
navtitle: relax_quotes
description: Option "relax_quotes" preserves quotes inside unquoted field.
keywords: ['csv', 'parse', 'options', 'relax_quotes', 'quotes']
---

# Option `relax_quotes`

The `relax_quotes` option preserves quotes inside unquoted field.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 0.0.1
* Related: [`quote`](/parse/options/quote/) &mdash; see [Available Options](/parse/options/#available-options)

## Usage

The second field is not quoted and it [contains a quote character](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.relax_quotes.js) inside:

`embed:packages/csv-parse/samples/option.relax_quotes.js`
