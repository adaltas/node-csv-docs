---
title: Option relax
navtitle: relax
description: Option "relax" preserves quotes inside unquoted field.
keywords: ['csv', 'parse', 'options', 'relax', 'quotes']
---

# Option `relax`

The `relax` option preserves quotes inside unquoted field.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 0.0.1
* Related: [`quote`](/parse/options/quote/) &mdash; see [Available Options](/parse/options/#available-options)

## Usage

The second field is not quoted and it [contains a quote character](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.relax.js) inside:

`embed:csv-parse/samples/option.relax.js`
