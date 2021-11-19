---
title: Combining the stream and callback APIs
navtitle: Stream + callback
description: Replace the writable stream with a string or buffer and the readable stream with a callback function.
keywords: ['stream', 'transform', 'api', 'stream', 'callback', 'function', 'mixin']
sort: 3.3
---

# Combining the stream and callback API

The steam and callback API are implemented inside the same module and they share the same implementation. It is possible to combine both. Records can be written with the stream writable API and obtained in the callback. They can also be provided as an argument and consumed with the stream readable API.

## Using the stream writable API

In the [input stream example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/api.mixed.input.stream.js), records are written with the `write` method and the resulting dataset is available in the user callback:

`embed:packages/stream-transform/samples/api.mixed.input.stream.js`

## Using the stream readable API

In the [input stream example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/api.mixed.output.stream.js), records are provided as an argument and consumed with the readable API:

`embed:packages/stream-transform/samples/api.mixed.output.stream.js`
