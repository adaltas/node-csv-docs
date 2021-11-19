---
title: Options
description: Options relative to the stream-transform package
keywords: ['stream', 'transform', 'options', 'parallel', 'consume', 'params']
sort: 4
---

# Stream Transform options

All options are optional. All the options from the [Node.js Writable Stream API](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) and the [Node.js Readable Stream API](https://nodejs.org/api/stream.html#stream_new_stream_readable_options) are supported and passed as is.

## Available options

* `consume` (boolean)   
  In the absence of a consumer, like a `stream.Readable`, trigger the consumption of the stream.
* `parallel` (number)   
  The number of transformation callbacks to run in parallel; only apply with asynchronous handlers; default to "100".
* `params` (anything)   
  Pass user defined parameters to the user handler as last argument.

## Using the `parallel` option

This option control the sequential versus concurrent execution of handlers. Note, parallelism only has effect with asynchronous user functions.

In sequential mode, only 1 transformation function is running at a given time. The [mode sequential example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/mode.sequential.js) force a sequential execution by setting the value to "1".

`embed:packages/stream-transform/samples/mode.sequential.js`

In concurrent mode, the option value defines the maximum number of parallel executions. 
