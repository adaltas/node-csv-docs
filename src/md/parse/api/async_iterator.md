---
title: Async iterator API
navtitle: Async iterator
description: The Async iterator API is both scalable and elegant. It takes advantage of the native Readable Stream API upon which the parser is build to iterate over the parsed records.
keywords: ['csv', 'parse', 'api', 'async', 'iterator']
sort: 3.4
---

# Async iterator API

The Async iterator API is both scalable and elegant. It takes advantage of the native Readable Stream API upon which the parser is build to iterate over the parsed records.

The [async iterator example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/async.iterator.js) below generates a CSV stream which is then parsed and iterated over. For each record, we simulate a slow asynchronous operation. This example is available with the command `node samples/async.iterator.js`.

`embed:packages/csv-parse/samples/async.iterator.js`
