---
title: Option bom
navtitle: bom
description: Prepend the byte order mark (BOM) to the output stream.
keywords: ['csv', 'stringify', 'options', 'bom', 'utf8', 'unicode', 'utf16']
---

# Option `bom`

The `bom` option prepend the [byte order mark (BOM)](https://en.wikipedia.org/wiki/Byte_order_mark) to the output stream.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 5.4.0
* Related: see [Available Options](/parse/options/#available-options)

## About

The UTF-8 BOM is a sequence of Bytes at the start of a text-stream (`EF BB BF` or `\ufeff`) that allows the reader to reliably determine if file is being encoded in UTF-8.

## Example

Default is the boolean value `false`. The [bom example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.bom.js) simply activates the option:

`embed:packages/csv-stringify/samples/option.bom.js`
