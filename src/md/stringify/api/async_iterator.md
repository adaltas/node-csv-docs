---
title: Async iterator API
navtitle: Async iterator
description: The Async iterator API is both scalable and elegant. It takes advantage of the native Readable Stream API upon which the stringifier is build to iterate over the parsed records.
keywords: ['csv', 'stringify', 'api', 'async', 'iterator']
sort: 3.4
---

# Async iterator API

The Async iterator API is both scalable and elegant. It takes advantage of the native Readable Stream API upon which the stringifier is build to iterate over the stringified chunks of data.

The [async iterator example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/async.iterator.js) below generates a CSV stream which is then stringified and iterated over. For each record, we simulate a slow asynchronous operation. This example is available with the command `node samples/api.async.iterator.js`.

`embed:packages/csv-stringify/samples/api.async.iterator.js`
