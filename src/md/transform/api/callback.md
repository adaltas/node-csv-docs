---
title: Callback API
navtitle: Callback
description: The callback API transform all the records and buffers the results into a single dataset which is passed to a user provided function.
keywords: ['csv', 'parse', 'api', 'callback', 'function', 'udf', 'stream']
sort: 3.2
---

# Callback API

The callback API transform all the records and buffers the results into a single dataset which is passed to a user provided function. As a consequence, the resulting dataset must fit into memory. It must be used only when the input source is not too big.

The signature is `const stream = transform(records, [options], handler, [callback])`.

## Example

In the [callback example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/api.callback.js), the user function shift the cells of every records.

`embed:packages/stream-transform/samples/api.callback.js`

_This example is available with the command `node samples/api.callback.js`._
