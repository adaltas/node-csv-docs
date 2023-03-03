---
title: Option quoted_empty
navtitle: quoted_empty
description: Quote empty fields.
keywords: ['csv', 'stringify', 'options', 'quotes', 'delimiter', 'escape']
---

# Option `quoted_empty`

Quote empty strings. It overrides `quoted_string` on empty strings when defined.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 0.0.4
* Related: [`quote`](/stringify/options/quote/), [`quoted_match`](/stringify/options/quoted_match/), [`quoted_string`](/stringify/options/quoted_string/), [`quoted`](/stringify/options/quoted/)  &mdash; see [Available Options](/stringify/options/#available-options)

Note, several options are available to control when to quote fields under certain conditions. Make sure to review the alternatives.

## Example

In the [quoted_empty example](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/samples/option.quoted.js), every field evaluated as empty is quoted. It includes an empty string and values of `false`, `null` and `undefined`.

`embed:packages/csv-stringify/samples/option.quoted.js`
