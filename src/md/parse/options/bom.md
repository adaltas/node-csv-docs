---
title: Option bom
navtitle: bom
description: Options relative to the csv-parse package
keywords: ['csv', 'parse', 'options', 'bom', 'utf', 'unicode', 'utf8']
sort: 4
---

# Option cast

The `bom` option strip the [byte order mark (BOM)](https://en.wikipedia.org/wiki/Byte_order_mark) from the input string or buffer. When activated, the BOM will be automatically detect and the parsing will occur whether a BOM was found or not.

The UTF-8 BOM is a sequence of Bytes at the start of a text-stream (EF BB BF) that allows the reader to more reliably guess a file as being encoded in UTF-8.

## Example

It is a boolean value which default to `false`. The [bom example](https://github.com/adaltas/node-csv-parse/blob/master/samples/options.bom.js) simply activate the option:

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const data = "\ufeffa,b,c\n"
const records = parse(data, {
  bom: true
})
assert.deepEqual(records, [
  [ 'a', 'b', 'c' ]
])
```
