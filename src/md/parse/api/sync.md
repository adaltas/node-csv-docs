---
title: Sync API
navtitle: Sync
description: The Async iterator API is both scalable and elegant. It takes advantage of the native Readable Stream API upon which the parser is build to iterate over the parsed records.
keywords: ['csv', 'parse', 'api', 'sync', 'memory', 'function']
sort: 2.3
---

# Sync API

The sync API expose a function which expect as input a full dataset as text and which returns the full result set as an array or an object.

To summarise, it is a regular direct synchronous call to a function: you pass CSV content and it returns records. Because of its simplicity, this is the recommended approach if you don't need scalability and if your dataset fit in memory. It is much easier to use at the expense of not being scalable.

Import the `csv-parse/lib/sync` module to use it. The exported function signature is `const records = parse(data, [options])`.

The [synchronous example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/module.sync.js) illustrates how to use the synchronous module. This example is available with the command `node samples/module.sync.js`.

```js
import assert from 'assert'
import {parse} from 'csv-parse/lib/sync'

const input = `
"key_1","key_2"
"value 1","value 2"
`
const records = parse(input, {
  columns: true,
  skip_empty_lines: true
})
assert.deepStrictEqual(
  records,
  [{ key_1: 'value 1', key_2: 'value 2' }]
)
```
