---
title: Callback
description: CSV - learn how to leverage the Node.js stream pipe API with CSV
keywords: ['csv', 'parse', 'parser', 'example', 'recipe', 'stream', 'async', 'pipe', 'read', 'write']
sort: 3.2
---

# Callback API

Also available in the `csv` module is the callback API. The all dataset is available in the second callback argument. Thus it will not scale with large dataset. The [callback example](https://github.com/adaltas/node-csv/blob/master/packages/csv/samples/callback.js) initialize each CSV function sequentially, with the output of the previous one. Note, for the sake of clarity, the example doesn't deal with error management. It is enough spaghetti code.

`embed:packages/csv/samples/callback.js`
