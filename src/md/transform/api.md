---
title: API
description: Stream Transform - stream, callback and sync APIs
keywords: ['csv', 'transform', 'api', 'callback', 'stream', 'sync', 'promise']
sort: 2
---

# Stream Transform API

## Introduction

The "csv-transform" package proposes different API flavours available through different modules. Under the hood, they are all based on the same implementation.

The stream and callback API are exported by the main module, using `require('csv-transform')` or `require('csv').transform`. The sync package is available using `require('csv-transform/lib/sync')` or `require('csv/lib/sync').transform`.

Both modules target ECMAScript Edition 6 (ES6 or ES2015), Node.js version 7.6 and above. For older version of JavaScript, every module is transpiled into ECMAScript Edition 5 (ES5) inside the folder "lib/es5". The ES5 modules share the exact same API with their ES6 counterpart. For example, the `sync` module compatible with ES5 is located available using `require('csv-transform/lib/es5/sync')`.

The stream API might not be the most pleasant API to use but is scalable. Use the callback style API or the sync API for simplicity, readability and convenience if you are sure that your datasets fit in memory. Note, it is possible to mix the stream and callback APIs.

### Node.js Stream API

The main module exported by the package is a native Node.js [Transform stream](https://nodejs.org/api/stream.html#stream_class_stream_transform). Transform streams implement both the Readable and Writable interfaces.

This is the recommended approach if you need a maximum of power. It ensures scalability by treating your data as a stream from the source to the destination and support all the options available.

The signature is `const stream = transform(data, [options], handler, [options], [callback])`.

In the [stream example](https://github.com/adaltas/node-stream-transform/blob/master/samples/api.stream.js), CSV data is sent through the `write` function and the resulted data is obtained
within the "readable" event by calling the `read` function.

This example is available with the command `node samples/api.stream.js`.

```js
const transform = require('stream-transform')
const assert = require('assert')

const output = []
const transformer = transform(function(data){
  data.push(data.shift())
  return data
})
transformer.on('readable', function(){
  while(row = transformer.read()){
    output.push(row)
  }
})
transformer.on('error', function(err){
  console.log(err.message)
})
transformer.on('finish', function(){
  assert.deepEqual(output, [
    [ '2', '3', '4', '1' ],
    [ 'b', 'c', 'd', 'a' ]
  ])
})
transformer.write(['1','2','3','4'])
transformer.write(['a','b','c','d'])
transformer.end()
```

### Callback API

The callback API support all the available options and will fit all the data into memory. It must be used only when the input source is not too big.

The signature is `const stream = transform(data, [options], handler, [callback])`.

In the [callback example](https://github.com/adaltas/node-stream-transform/blob/master/samples/api.callback.js), the user function shift the cells of every records.

This example is available with the command `node samples/api.callback.js`.

```js
const transform = require('stream-transform')
const assert = require('assert')

transform([
  ['1','2','3','4'],
  ['a','b','c','d']
], function(data){
  data.push(data.shift())
  return data
}, function(err, output){
  assert.deepEqual(output, [
    [ '2', '3', '4', '1' ],
    [ 'b', 'c', 'd', 'a' ]
  ])
})
```

### Sync API

The sync API is here for conveniency. Due to its synchronous nature, not all options are honoured. The user handler functions must only be written as synchronous.

The signature is `const data = transform(data, [options], handler)`.

The [sync example](https://github.com/adaltas/node-stream-transform/blob/master/samples/api.callback.js) illustrates how convenient it is to use this API.

```js
const transform = require('stream-transform/lib/sync')
const assert = require('assert')

const data = transform([
  [ 'a', 'b', 'c', 'd' ],
  [ '1', '2', '3', '4' ]
], function(data){
  data.push(data.shift())
  return data
})

assert.deepEqual(data, [
  [ 'b', 'c', 'd', 'a' ],
  [ '2', '3', '4', '1' ]
])
```
