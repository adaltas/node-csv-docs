---
title: Stream API
navtitle: Stream
description: The stream API might not be the most pleasant API to use but is scalable. It is the one upon which all the other implementation are based.
keywords: ['csv', 'parse', 'api', 'stream', 'async', 'pipe', 'native', 'write', 'events']
sort: 2.1
---

# Stream API

The main module exported by this package implements the native Node.js [transform stream](http://nodejs.org/api/stream.html#stream_class_stream_transform). Transform streams implement both the Readable and Writable interfaces.

This is the recommended approach if you need a maximum of power. It ensures scalability by treating your data as a stream from the source to the destination.

The signature is `const stream = parse([options])`.

## Both a readable and writable stream

In the [stream example](https://github.com/adaltas/node-csv-parse/blob/master/samples/api.stream.js), CSV data is sent through the `write` function and the resulting data is obtained within the `readable` event by calling the `read` function.

```js
const parse = require('csv-parse')
const assert = require('assert')
const output = []
// Create the parser
const parser = parse({
  delimiter: ':'
})
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
// Write data to the stream
parser.write("root:x:0:0:root:/root:/bin/bash\n")
parser.write("someone:x:1022:1022::/home/someone:/bin/bash\n")
// Close the readable stream
parser.end()
```

## Using the pipe function

One useful function of the Stream API is `pipe` to interact between multiple streams. You may use this function to connect a `stream.Readable` source to a `stream.Writable` destination.

The [pipe example](https://github.com/adaltas/node-csv-parse/blob/master/samples/api.pipe.js) reads a file, parses its content, transforms it and print the result to the standard output.

This example is available with the command `node samples/api.pipe.js`.

```js
const parse = require('csv-parse')
const generate = require('csv-generate')
const transform = require('stream-transform')

const generator = generate({
  length: 20
})
const parser = parse({
  delimiter: ':'
})
const transformer = transform(function(record, callback){
  setTimeout(function(){
    callback(null, record.join(' ')+'\n')
  }, 500)
}, {
  parallel: 5
})
generator.pipe(parser).pipe(transformer).pipe(process.stdout)
```
