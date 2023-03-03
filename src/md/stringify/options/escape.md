---
title: Option escape
navtitle: escape
description: Single character used for escaping; only apply to characters matching the `quote` and the `escape` options default to `"`.
keywords: ['csv', 'stringify', 'options', 'escape']
---

# Option `escape`

Single character used for escaping. It only applies to characters matching the `quote` and the `escape` options default to double quotes (`"`).

* Type: `string|Buffer`
* Optional
* Default: `false`
* Since: 0.0.1

## Default behavior

The [default escape value](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/samples/option.escape.default.js) is double quotes (`"`). It is automatically applied when quotes are present.

`embed:packages/csv-stringify/samples/option.escape.default.js`

## Using a custom value

The [custom escape example](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/samples/option.escape.custom.js), uses the alternative backslash (`\`).

`embed:packages/csv-stringify/samples/option.escape.custom.js`
