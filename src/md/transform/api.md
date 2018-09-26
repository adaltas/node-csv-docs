---
title: API
description: Stream Transform - stream, callback and sync APIs
keywords: ['intro','page']
sort: 2
---

## Stream Transform API

### [Node.js Stream API][stream]

It implements the native Node.js [transform stream][stream] which is both readable and writable.

This is the recommended approach if you need a maximum of power. It ensures scalability by treating your data as a stream from the source to the destination and support all the options available.

`transform(data, [options], handler, [options], [callback])`

For additionnal usage and example, you may refer to [example page](/transform/examples/), [the "samples" folder](https://github.com/adaltas/node-stream-transform/tree/master/samples) and [the "test" folder](https://github.com/adaltas/node-stream-transform/tree/master/test).

### Callback API

The callback API support all the available options and will fit all the data into memory. It must be used only when the input source is not too big.

`transform(data, [options], handler, callback)`

### Sync API

The sync API is here for conveniency. Due to its synchronous nature, not all options are honored. User handler functions must only be written as synchronous.

`const data = transform(data, [options], handler)`

## Available properties

*    `transform.running`   
  The number of transformation callback being run at a given time.
*    `transform.started`   
  The number of transformation callback which have been initiated.
*    `transform.finished`   
  The number of transformation callback which have been executed.
