---
title: API
description: CSV Parse - stream, callback and sync APIs
keywords: ['csv', 'parse', 'parser', 'api', 'callback', 'stream', 'sync', 'promise']
sort: 2
---

# CSV Parse API

## Introduction

There are multiple APIs available. Under the hood, they are all based on the same implementation. The stream API might not be the most pleasant API to use but is scalable. Use the callback style API or the sync API for simplicity, readability and conveniency if you are sure that your datasets fit in memory.

### Stream API

The main module exported by this package implements the native Node.js [transform stream](http://nodejs.org/api/stream.html#stream_class_stream_transform). Transform streams implement both the Readable and Writable interfaces.

This is the recommended approach if you need a maximum of power. It ensures scalability by treating your data as a stream from the source to the destination.

The signature is `const stream = parse([options])`.

In the [stream example](https://github.com/adaltas/node-csv-parse/blob/master/samples/api.stream.js), CSV data is sent through the `write` function and the resulting data is obtained
within the `readable` event by calling the `read` function.

```js
const parse = require('csv-parse')
const assert = require('assert')
const output = []
// Create the parser
const parser = parse({
  delimiter: ':'
})
// Write data to the stream
parser.write("root:x:0:0:root:/root:/bin/bash\n")
parser.write("someone:x:1022:1022::/home/someone:/bin/bash\n")
// Close the readable stream
parser.end()
// Use the readable stream api
parser.on('readable', function(){
  let record
  while (record = parser.read()) {
    output.push(record)
  }
})
// Catch any error
parser.on('error', function(err){
  console.error(err.message)
})
// When we are done, test that the parsed output matched what expected
parser.on('end', function(){
  assert.deepEqual(
    output,
    [
      [ 'root','x','0','0','root','/root','/bin/bash' ],
      [ 'someone','x','1022','1022','','/home/someone','/bin/bash' ]
    ]
  )
})
```

## Callback API

The signature is `parse(data, [options], callback)`.

The [callback example](https://github.com/adaltas/node-csv-parse/blob/master/samples/api.callback.js) takes the CSV string in the first argument and a user callback in the second argument. The callback will received any error thrown by the CSV parser or an array of records object in the second argument. returns an array inside a user-provided
callback.

```js
const parse = require('csv-parse')
const assert = require('assert')

const input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"'
parse(input, {
  comment: '#'
}, function(err, output){
  assert.deepEqual(
    output,
    [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]
  )
})
```

### Sync API

It accepts a full data set as text and returns the full result set as an array
or an object.

This represent a regular direct synchronous call to a function: you pass records
and it return a CSV text. Because of its simplicity, this is the recommended
approach if you don't need scalability and if your dataset fit in memory.

The module to require is `csv-parse/lib/sync` and the signature is `const records = parse(data, [options])`.

The [synchronous example](https://github.com/adaltas/node-csv-parse/blob/master/samples/module.sync.js) illustrates how to use the alternative synchronous module. It is much easier to use at the expense of not being scalable.

This example is available with the command `node samples/module.sync.js`.

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const input = `
"key_1","key_2"
"value 1","value 2"
`
const records = parse(input, {
  columns: true,
  skip_empty_lines: true
})
assert.deepEqual(records, [{ key_1: 'value 1', key_2: 'value 2' }])
```
