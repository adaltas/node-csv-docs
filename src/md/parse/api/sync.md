---
title: Sync API
navtitle: Sync
description: The sync API exposes a function, which expects as input a full dataset as text, and which returns the full result set as an array or an object.
keywords: ['csv', 'parse', 'api', 'sync', 'memory', 'function']
sort: 3.3
---

# Sync API

The sync API exposes a function, which expects as input a full dataset as text, and which returns the full result set as an array or an object.

To summarise, it is a regular direct synchronous call to a function: you pass CSV content and it returns records. Because of its simplicity, this is the recommended approach if you don't need scalability and if your dataset fit in memory.

Choose the sync API for simplicity, readability and convenience at the expense of not being scalable.

Import or require the `csv-parse/sync` module to use it. The exported function signature is `const records = parse(data, [options])`.

The [synchronous example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/module.sync.js) illustrates how to use the synchronous module. This example is available with the command `node samples/api.sync.js`.

`embed:packages/csv-parse/samples/api.sync.js`
