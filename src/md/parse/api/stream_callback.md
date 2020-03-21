---
title: Mixing the stream and callback APIs
navtitle: Stream + callback
description: Replace the writable stream with a string or buffer and the readable stream with a callback function.
keywords: ['csv', 'parse', 'api', 'stream', 'callback', 'function', 'mixin']
sort: 2.3
---

# Mixing the stream and callback APIs

The main module exported by the package leverages the Node.js [stream transform API](https://nodejs.org/api/stream.html). However, the input doesn't have to be a readable stream. Instead, it could be the CSV string or Buffer. Also, the output doesn't have to be a writable stream, it could be user user callback function.

Uses it for convenience in case you are already interacting with a readable stream or a writable stream. It is not scalable because it implies that you either have all CSV dataset in memory and wish to pipe the generated records into a stream writer or that you have a stream reader generating a CSV data stream and wish to obtain a full dataset with all the records.

The signature of the [output stream example](https://github.com/adaltas/node-csv-parse/blob/master/samples/mixed.output_stream.js) is `const stream = parse(input, options)`. It takes an input string and an options object as arguments and return a readable stream.

```js
const parse = require('csv-parse')
const assert = require('assert')

const output = []
parse(`
  "1","2","3"
  "a","b","c"
`, {
  trim: true,
  skip_empty_lines: true
})
// Use the readable stream api
.on('readable', function(){
  let record
  while (record = this.read()) {
    output.push(record)
  }
})
// When we are done, test that the parsed output matched what expected
.on('end', function(){
  assert.deepEqual(
    output,
    [
      [ '1','2','3' ],
      [ 'a','b','c' ]
    ]
  )
})
```

Inversely, the signature of the [input stream example](https://github.com/adaltas/node-csv-parse/blob/master/samples/mixed.input_stream.js) is `const stream = parse(options, callback)`. It takes an options object and a callback function as arguments and return a writable stream.

```js
const parse = require('csv-parse')
const assert = require('assert')
// Create the parser
const parser = parse({
  delimiter: ':'
}, function(err, records){
  assert.deepEqual(
    records,
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
