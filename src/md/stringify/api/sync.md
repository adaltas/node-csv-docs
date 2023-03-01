---
title: Sync API
navtitle: Sync
description: The sync API exposes a function, which expects as input a full dataset of records, and which returns the stringified CSV content.
keywords: ['csv', 'stringify', 'api', 'sync', 'memory', 'function']
sort: 3.3
---

# Sync API

The sync API behave like a [pure function](https://en.wikipedia.org/wiki/Pure_function). For a given input made of the input data set and its options, it always produce the same output data.

This represent a regular direct synchronous call to a function: you pass records and it return a CSV text. Because of its simplicity, this is the recommended approach if you don't need scalability and if your dataset fit in memory. 

The module to import is `csv-stringify/sync` and the signature is `const data = stringify(records, [options])` as shown in the [sync example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/api.sync.js):

`embed:packages/csv-stringify/samples/api.sync.js`
