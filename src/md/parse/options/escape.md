---
title: Option escape
navtitle: escape
description: Option "escape" to escape quote and escape characters inside quoted fileds.
keywords: ['csv', 'parse', 'options', 'escape', 'quote', 'character']
---

# Option `escape`

The `escape` option set the escape character as one character/byte only. It only applies to quote and escape characters inside quoted fields.

The default value is `"` (double quote) when no option is provided and when the value is `undefined` or `true`. The values `null` and `false` disable escaping.

* Type: `Buffer|string|null|boolean`
* Optional
* Default: `"`
* Since: 0.0.1

## Default behavior

The [default example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.escape.default.js) doesn't need to declare the `escape` option. It is activated by default with the `"` character. Note how it only apply inside a quoted field.

`embed:packages/csv-parse/samples/option.escape.default.js`

## Custom behavior

The [custom example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.escape.custom.js) change the default behavior by setting the escape character to `\` (backslash).

`embed:packages/csv-parse/samples/option.escape.custom.js`
