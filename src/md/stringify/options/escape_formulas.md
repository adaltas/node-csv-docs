---
title: Option escape_formulas
navtitle: escape_formulas
description: Escape values that start with `=`, `+`, `-`, `@`, `\t`, or `\r` with a `'` and defend against CSV injection attacks.
keywords: ['csv', 'stringify', 'options', 'escape_formulas', 'quotes', 'escape']
---

# Option `escape_formulas`

Escape values that start with `=`, `+`, `-`, `@`, `\t`, or `\r` with `'` and defend against CSV injection attacks.

* Type: `Boolean`
* Optional
* Default: `false`
* Since: 6.3.0
* Related: `quote`, [`escape`](/stringify/options/escape/) &mdash; see [Available Options](/parse/options/#available-options)

## Example

In the [escape formulas example](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/samples/option.escape_formulas.js), every field wich starts with the values `=` and `@` is escaped by prefixing its value with `'`.

`embed:packages/csv-stringify/samples/option.escape_formulas.js`
