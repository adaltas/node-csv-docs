---
title: Option quoted_string
navtitle: quoted_string
description: Quote all fields of type string.
keywords: ['csv', 'stringify', 'options', 'quotes', 'delimiter', 'escape', 'string']
---

# Option `quoted_string`

Quote all fields of type string. This option apply even when there is no character requiring quotes.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 0.0.4
* Related: [`quoted_empty`](/stringify/options/quoted_empty/), [`quoted_match`](/stringify/options/quoted_match/), [`quoted`](/stringify/options/quoted/)  &mdash; see [Available Options](/stringify/options/#available-options)

Note, several options are available to control when to quote fields under certain conditions. Make sure to review the alternatives.

## Example

The [quoted_string example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.quoted.js) illustrates that only fields of type `string`, empty or not, are quoted.

`embed:packages/csv-stringify/samples/option.quoted.js`
