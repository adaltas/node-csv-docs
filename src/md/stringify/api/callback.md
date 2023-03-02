---
title: Combining the stream and callback APIs
navtitle: Callback
description: Replace the writable stream with a string or buffer and the readable stream with a callback function.
keywords: ['csv', 'stringify', 'api', 'stream', 'callback', 'function', 'mixin']
sort: 3.3
---

# Callback API

The signature is `stringify(records, [options], callback)`.

The [callback example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/api.callback.js) receives an array and a callback function. The input is serialised into a string unless an error occurred.

`embed:packages/csv-stringify/samples/api.callback.js`

_Run this example with the command `node samples/api.callback.js`._
