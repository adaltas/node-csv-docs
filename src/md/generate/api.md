---
title: API
description: CSV Generate - stream, callback and sync APIs
keywords: ['csv', 'generate', 'api', 'callback', 'stream', 'sync', 'promise']
sort: 2
---

# CSV Generate API

## Introduction

There are multiple APIs available. Under the hood, they are all based on the same implementation. The stream API might not be the most pleasant API to use but is scalable. Use the callback style API or the sync API for simplicity, readability and convenience if you are sure that your datasets fit in memory.

## Stream API

The main module of this package implements the native Node.js [readable stream API](http://nodejs.org/api/stream.html#stream_class_stream_transform). This is the recommended approach if you need a maximum of power. It ensures scalability by treating your data as an input stream. It is however more verbose and harder to use.

The signature is `const stream = generate([options])`.

The [stream example](https://github.com/adaltas/node-csv-generate/blob/master/samples/api.stream.js) illustrates the various events to listen.

```js
const generate = require('csv-generate')
const assert = require('assert')
const records = []
generate({
  seed: 1,
  objectMode: true,
  columns: 2,
  length: 2
})
.on('readable', function(){
  let record
  while(record = this.read()){
    records.push(record)
  }
})
.on('error', function(err){
  console.error(err)
})
.on('end', function(){
  assert.deepEqual(records, [
    [ 'OMH', 'ONKCHhJmjadoA' ],
    [ 'D', 'GeACHiN' ]
  ])
})
```

## Callback API

The generated output is passed to the callback in the second argument. This mode
implies that the overall dataset will be stored in memory.

The signature is `const stream = generate([options], callback)`.

The [callback example](https://github.com/adaltas/node-csv-generate/blob/master/samples/api.callback.js) generate a dataset with 2 records.

```js
const generate = require('csv-generate')
const assert = require('assert')
generate({
  seed: 1,
  objectMode: true,
  columns: 2,
  length: 2
}, function(err, records){
  assert.deepEqual(records, [
    [ 'OMH', 'ONKCHhJmjadoA' ],
    [ 'D', 'GeACHiN' ]
  ])
})
```

## Sync API

The generated output is returned. Like with the callback API, this mode
implies that the overall dataset will be stored in memory.

The module to require is `csv-generate/lib/sync` and the signature is `const records = generate([options])`.

The [sync example](https://github.com/adaltas/node-csv-generate/blob/master/samples/api.callback.js) returns an array of 2 records.


```js
const generate = require('csv-generate/lib/sync')
const assert = require('assert')

const records = generate({
  seed: 1,
  objectMode: true,
  columns: 2,
  length: 2
})
assert.deepEqual(records, [
  [ 'OMH', 'ONKCHhJmjadoA' ],
  [ 'D', 'GeACHiN' ]
])
```
