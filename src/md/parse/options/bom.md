---
title: Option bom
navtitle: bom
description: Option "bom" strip the byte order mark (BOM).
keywords: ['csv', 'parse', 'options', 'bom', 'utf', 'unicode', 'utf8']
---

# Option `bom`

The `bom` option strips the [byte order mark (BOM)](https://en.wikipedia.org/wiki/Byte_order_mark) from the input string or buffer. When activated, the BOM is automatically detected and the parsing will occur whether a BOM was found or not.

It is recommended to always activate this option when working with UTF-8 files.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 4.4.0
* Related: [`encoding`](/parse/options/encoding/) &mdash; see [Available Options](/parse/options/#available-options)

## About

The UTF-8 BOM is a sequence of Bytes at the start of a text-stream (`EF BB BF` or `\ufeff`) that allows the reader to reliably determine if file is being encoded in UTF-8.

## Example

It is a boolean value which default to `false`. The [bom example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.bom.js) simply activate the option:

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const data = "\ufeffa,b,c\n"
const records = parse(data, {
  bom: true
})
assert.deepStrictEqual(records, [
  [ 'a', 'b', 'c' ]
])
```

## Hidden BOM in output

The option is disabled by default. When importing UTF-8 input, such as when reading from a file encoded as UTF-8, it is safe to activate the option, even if you are not sure it includes the BOM header.

Handling BOM header without this option may create unexpected behaviors. The BOM bytes will be present in the output and invisible, either in the values or in the object properties when using the `column` option.

Consider the [following example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.bom.hidden.js), it illustrate how the property name is not the one printed in the console:

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const data = "\ufeffkey\nvalue"
const records = parse(data, {
  bom: false,
  columns: true
})
// It seems that the output is perfectly fine
assert.equal(JSON.stringify(records[0]), '{"﻿key":"value"}')
// However, the first property include the BOM bytes
assert.equal(Object.keys(records[0])[0], '\ufeffkey')
```
