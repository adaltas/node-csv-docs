---
title: Option encoding
navtitle: encoding
description: Option "encoding" to set the input and output encodings.
keywords: ['csv', 'parse', 'options', 'encoding', 'bom', 'input', 'output', 'utf8', 'utf16', 'ascii', 'base64', 'hex']
---

# Option `encoding`

The `encoding` option declare the input and output encodings.

The default encoding value is `utf8`. The default 'utf8' encoding is also used when the value is `true`. The values `null` and `false` disable string serialization and returns buffers instead of strings.

* Type: `string|null`
* Optional
* Default: `utf8`
* Since: 4.13.0
* Related: [`bom`](/parse/options/bom/) &mdash; see [Available Options](/parse/options/#available-options)

## Default behavior

The list of [available supported encoding in Node.js](https://github.com/nodejs/node/blob/master/lib/buffer.js) is available inside its source code. At the time of this writing, it includes 'utf8', 'ucs2', 'utf16le', 'latin1', 'ascii', 'base64', 'hex'.

The default encoding in Node.js is UTF-8. When using UTF-8, you do not need to specify anything.

When an alternative encoding is used, it can be discovered with the [BOM](/parse/options/bom/) (byte order mark) present at the begining of the input data or it can be defined with this option.

## Working with options

When providing options, the values must internally reflect the data source encoding. If the value is a string, the parser will convert the value into a buffer representation using the selected encoding input value.

However, if the value is a buffer, you must make sure the buffer was created with the right encoding, here is an exemple [encoding an option as buffer](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.encoding.options.js), the `delimiter` option in this case:

```js
const parse = require('../lib/sync')
const assert = require('assert')

const data = Buffer.from(`a:b\n1:2`, 'utf16le')
const records = parse(data, {
  encoding: 'utf16le',
  delimiter: Buffer.from(':', 'utf16le')
})
assert.deepStrictEqual(records, [
  ['a', 'b'],
  ['1', '2']
])
```

## Bom automatic detection

The BOM is a special Unicode character sequence at the begining of a text stream to indicate the encoding.

Because the BOM is specific to unicode, only the UTF-8 and UTF-16LE encoding are natively detected by the parser. Here is an example [detecting the encoding](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.encoding.detection.js), UTF-16LE in this case:

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const data = Buffer.from(`\uFEFFa,b,c\n1,2,3`, 'utf16le')
const records = parse(data, {
  bom: true
})
assert.deepStrictEqual(records, [
  [ 'a', 'b', 'c' ],
  [ '1', '2', '3' ]
])
```

Notice how the BOM is declared as `\uFEFF`. You can see how it is converted to the hexadecimal representation of `FF EE` with the command `node -e 'console.info(Buffer.from("\ufeff", "utf16le"))'`. You can refer to the [Wikipedia byte order mark by encoding table](https://en.wikipedia.org/wiki/Byte_order_mark) for further investigations.

## Buffer output

A value of `null` or `false` disables output encoding and [returns the raw buffer](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.encoding.buffer.js).

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const data = Buffer.from(`a,b\n1,2`)
const records = parse(data, {
  encoding: null
})
assert.deepStrictEqual(records, [
  [ Buffer.from('a'), Buffer.from('b') ],
  [ Buffer.from('1'), Buffer.from('2') ]
])
```
