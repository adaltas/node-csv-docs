---
title: Option trim
navtitle: trim
description: Option "trim" ignore whitespaces immediately around the delimiter.
keywords: ['csv', 'parse', 'options', 'columns']
---

# Option `trim`

The `trim` option ignore whitespace characters immediately around the [delimiter](/parse/options/delimiter/). Defaults to `false`. It does not remove whitespace present inside the quotes of a field.

* Type: `boolean`
* Optional
* Default: `false`
* Since: early days
* Related: `ltrim`, `rtrim` &mdash; see [Available Options](/parse/options/#available-options)

The characters interpreted as whitespaces are identical to the `\s` meta character in regular expressions:

* Horizontal tab, `String.fromCharCode(9)`
* NL line feed, new line, `String.fromCharCode(10)`
* NP Form feed, new page, `String.fromCharCode(12)`
* Carriage return, `String.fromCharCode(13)`
* Space, `String.fromCharCode(32)`

## Example

This [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.trim.js) insert spaces around fields at multiple locations.

`embed:packages/csv-parse/samples/option.trim.js`
