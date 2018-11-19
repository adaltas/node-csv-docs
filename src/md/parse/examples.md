---
title: Examples
keywords: ['csv', 'parse', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 8
---

# CSV Parse examples

For additional usages and examples, you may refer to:

* [the API page](/parse/api/),
* [the "samples" folder](https://github.com/adaltas/node-csv-parse/tree/master/samples)
* [the "test" folder](https://github.com/adaltas/node-csv-parse/tree/master/test).

## Using the pipe function

One useful function of the Stream API is `pipe` to interact between
multiple streams. You may use this function to connect a `stream.Readable`
source to a `stream.Writable` destination.

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

### Mixing the stream and callback APIs

The main module exported by the package leverages the stream transform API but input doesn't have to be an readable stream and output doesn't have to be a writable stream.

Uses it for convenience in case you are already interacting with a readable
stream or a writable stream. It is not scalable because it implies that you
either have all CSV dataset in memory and wish to pipe the generated
records into a stream writer or that you have a stream reader generating a CSV
data stream and wish to obtain a full dataset with all the records.

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
