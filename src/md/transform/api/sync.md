---
title: Sync API
navtitle: Sync
description: The Async iterator API is both scalable and elegant. It takes advantage of the native Readable Stream API upon which the parser is build to iterate over the parsed records.
keywords: ['stream', 'transform', 'api', 'sync', 'memory', 'function']
sort: 3.4
---

# Sync API

If you input and output datasets are not too large and fit into memory, the sync API provides a convenient function to transform your data.

The signature is `const records = transform(records, [options], handler)`.

Due to its synchronous nature, not all options are honoured. The user handler function must only be written in synchronous mode, with expecting a callback in its second argument.

## Example

The [sync example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/api.sync.js) illustrates how to use this API.

`embed:packages/stream-transform/samples/api.sync.js`
