---
title: API
description: CSV Stringify - stream, callback and sync APIs
keywords: ['csv', 'stringify', 'api', 'callback', 'stream', 'sync', 'promise']
sort: 2
---

# CSV Stringify API

## Introduction

There are multiple APIs available. Under the hood, they are all based on the same implementation. The stream API might not be the most pleasant API to use but is scalable. Use the callback style API or the sync API for simplicity, readability and convenience if you are sure that your datasets fit in memory.

### Stream API

The main module of the package implements the native Node.js [transform stream][https://nodejs.org/api/stream.html#stream_object_mode_duplex_streams] which is both readable and writable.

This is the recommended approach if you need a maximum of power. It ensure
scalability by treating your data as a stream from the source to the destination.

The signature is `const stream = stringify([options])`.

The [stream example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/api.stream.js) write 2 records and register multiple events to read the generated CSV output and get notified when the serialisation is finished.

```js
const stringify = require('csv-stringify')
const assert = require('assert')
const data = []
const stringifier = stringify({
  delimiter: ':'
})
stringifier.on('readable', function(){
  let row;
  while(row = stringifier.read()){
    data.push(row)
  }
})
stringifier.on('error', function(err){
  console.error(err.message)
})
stringifier.on('finish', function(){
  assert.equal(
    data.join(''),
    "root:x:0:0:root:/root:/bin/bash\n" +
    "someone:x:1022:1022::/home/someone:/bin/bash\n"
  )
})
stringifier.write([ 'root','x','0','0','root','/root','/bin/bash' ])
stringifier.write([ 'someone','x','1022','1022','','/home/someone','/bin/bash' ])
stringifier.end()
```
_After cloning the project repository, run this example with the command `node samples/api.stream.js`._

### Mixed API

It leverages the stream transform API but input doesn't have to be an readable
stream and output doesn't have to be a writable stream. Input may be a string
passed as first argument. Output may be obtained in the callback passed as last
argument.

Uses it for convenience in case you are already interacting with a readable
stream or a writable stream. It is not scalable because it implies that you
either have all your records in memory and wish to pipe the generated
CSV into a stream writer or that you have a stream reader generated records and
wish to obtain a string representing the full CSV text.

## Callback API

The signature is `stringify(records, [options], callback)`.

The [callback example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/api.callback.js) receives an array and a callback function. The input is serialised into a string unless an error occurred.

```js
const stringify = require('csv-stringify')
const assert = require('assert')

stringify([
  [ '1', '2', '3', '4' ],
  [ 'a', 'b', 'c', 'd' ]
], function(err, output){
  assert.equal(output, '1,2,3,4\na,b,c,d\n')
})
```
_Run this example with the command `node samples/api.callback.js`._

### Sync API

It accepts a full data set of records and returns the full result set.

This represent a regular direct synchronous call to a function: you pass records
and it return a CSV text. Because of its simplicity, this is the recommended
approach if you don't need scalability and if your dataset fit in memory. 

The module to require is `csv-stringify/lib/sync` and the signature is `const data = stringify(records, [options])`.
