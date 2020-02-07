---
title: Async iterator API
navtitle: Async iterator
description: The Async iterator API is both scalable and elegant. It takes advantage of the native Readable Stream API upon which the parser is build to iterate over the parsed records.
keywords: ['csv', 'parse', 'api', 'async', 'iterator']
sort: 2.4
---

# Async iterator API

The Async iterator API is both scalable and elegant. It takes advantage of
the native Readable Stream API upon which the parser is build to iterate
over the parsed records.

The [async iterator example](https://github.com/adaltas/node-csv-parse/blob/master/samples/async.iterator.js) below generate a CSV stream which is then parsed and iterated. For
each record, we simulate a slow asynchronous operation. This example is available with the command `node samples/async.iterator.js`.

```js
const assert = require('assert');
const generate = require('csv-generate');
const parse = require('..');

(async () => {
  // Initialise the parser by generating random records
  const parser = generate({
    high_water_mark: 64 * 64,
    length: 1000
  }).pipe(
    parse()
  )
  // Intialise count
  let count = 0;
  // Report start
  process.stdout.write('start\n')
  // Iterate through each records
  for await (const record of parser) {
    // Report current line
    process.stdout.write(`${count++} ${record.join(',')}\n`)
    // Fake asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  // Report end
  process.stdout.write('...done\n')
  // Validation
  assert.strictEqual(count, 10000)
})()
```
