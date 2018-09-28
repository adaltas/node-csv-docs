---
title: Options
description: Options relative to the stream-transform package
keywords: ['stream', 'transform', 'options']
sort: 3
---

# Stream Transform options

All options are optional. All the options from the [Node.js Writable Stream API](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) and the [Node.js Readable Stream API](https://nodejs.org/api/stream.html#stream_new_stream_readable_options) are supported and passed as is.

## Available options

*   `parallel` (number)   
     The number of transformation callbacks to run in parallel; only appy with asynchronous handlers; default to "100".
*   `consume` (boolean)   
    In the absence of a consumer, like a stream.Readable, trigger the
    consumption of the stream.
*   `params` (anything)   
    Pass user defined parameters to the user handler as last argument.

## Using the `parallel` option

This option control the sequential versus concurrent execution of handlers. Note, parallelism only has effect with asynchronous user functions.

In sequential mode, only 1 transformation function is running at a given time. The [mode sequential example](https://github.com/adaltas/node-stream-transform/blob/master/samples/mode.sequential.js) force a sequential execution by setting the value to "1".

```js
const transform = require('stream-transform')
const assert = require('assert')

// Generate a dataset of 500 records
const records = '.'.repeat(500).split('.').map( (_, i) => i )
// Transform the dataset
transform(records, {
  parallel: 1
}, function(record, callback){
  setTimeout(function(){
    callback(null, record)
  // Random timeout to prove sequential execution
  }, Math.ceil(Math.random() * 10))
}, function(err, records){
  assert.equal(
    records.join(','),
    '.'.repeat(500).split('.').map( (_, i) => i ).join(',')
  )
})
```

In concurrent mode, the option value defines the maximum number of parallel executions. 
