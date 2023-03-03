---
title: Option quoted
navtitle: quoted
description: Quote all the non-empty fields.
keywords: ['csv', 'stringify', 'options', 'quotes', 'delimiter', 'escape']
---

# Option `quoted`

Quote all the non-empty fields even when there is no character requiring quotes.

By default, only the fields containing a special character such a delimiter or a quote are surrounded by quotes.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 0.0.1
* Related: [`quote`](/stringify/options/quote/), [`quoted_empty`](/stringify/options/quoted_empty/), [`quoted_match`](/stringify/options/quoted_match/), [`quoted_string`](/stringify/options/quoted_string/)  &mdash; see [Available Options](/stringify/options/#available-options)

Note, several options are available to control when to quote fields under certain conditions. Make sure to review the alternatives.

## Example using "quote"

In the [quoted example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.quoted.js), every field evaluated as empty is not quoted. It includes an empty string and values of `false`, `null` and `undefined`.

`embed:packages/csv-stringify/samples/option.quoted.js`
