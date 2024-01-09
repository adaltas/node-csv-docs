---
title: Sync
description: CSV - learn how to leverage the Node.js stream pipe API with CSV
keywords: ['csv', 'parse', 'parser', 'example', 'recipe', 'stream', 'async', 'pipe', 'read', 'write']
sort: 3.3
---

# Sync API

The sync API behave like [pure functions](https://en.wikipedia.org/wiki/Pure_function). For a given input, it always produce the same output.

Because of its simplicity, this is the recommended approach if you don't need scalability and if your dataset fit in memory. 

The module to import is `csv/sync`. The [sync example](https://github.com/adaltas/node-csv/blob/master/packages/csv/samples/sync.js) illustrate its usage.

```embed:packages/csv/samples/sync.js```
