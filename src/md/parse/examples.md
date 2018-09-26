---
title: Examples
keywords: ['csv','parse', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 4
---

# CSV Parse examples

This package proposes different API flavours. Every example is available on [GitHub](https://github.com/adaltas/node-csv-parse/tree/master/samples).

## Using the stream API

The CSV parser implements the [`stream.Transform` API](https://nodejs.org/api/stream.html#stream_class_stream_transform). Transform streams implement both the Readable and Writable interfaces.

In the [stream example](https://github.com/adaltas/node-csv-parse/blob/master/samples/api.stream.js), CSV data is sent through the `write` function and the resulting data is obtained
within the "readable" event by calling the `read` function.

This example is available with the command `node samples/api.stream.js`.

```javascript
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
// Use the writable stream api
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

## Using the pipe function

One useful function of the Stream API is `pipe` to interact between
multiple streams. You may use this function to connect a `stream.Readable`
source to a `stream.Writable` destination.

The [pipe example](https://github.com/adaltas/node-csv-parse/blob/master/samples/api.pipe.js) reads a file, parses its content, transforms it and print the result to the standard output.

This example is available with the command `node samples/api.pipe.js`.

```javascript
const parse = require('csv-parse')
const generate = require('csv-generate')
const transform = require('stream-transform')

const parser = parse({
  delimiter: ':'
})
const input = generate({
  length: 20
})
const transformer = transform(function(record, callback){
  setTimeout(function(){
    callback(null, record.join(' ')+'\n')
  }, 500)
}, {
  parallel: 5
})
input.pipe(parser).pipe(transformer).pipe(process.stdout)
```

## Using the callback API

The [callback example](https://github.com/adaltas/node-csv-parse/blob/master/samples/api.callback.js) trakes the CSV string in the first argument and a user callback in the second argument. The callback will received any error thrown by the CSV parser or an array of records object in the second argument. returns an array inside a user-provided
callback.

This example is available with the command `node samples/api.callback.js`.

```javascript
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

## Using the synchronous module

The [synchronous example](https://github.com/adaltas/node-csv-parse/blob/master/samples/module.sync.js) illustrates how to use the alternative synchronous module. It is much easier to use at the expense of not being scalable.

This example is available with the command `node samples/module.sync.js`.

```javascript
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
