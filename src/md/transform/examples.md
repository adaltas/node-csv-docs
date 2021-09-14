---
title: Examples
keywords: ['csv', 'transform', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 7
---

# Stream Transform examples

This package proposes different API flavours. Every example is available on [GitHub](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/samples).

For additional usages and examples, you may refer to:

* [the API page](/transform/api/)
* [the "samples" folder](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/samples)
* [the "test" folder](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/test).

## Mixing the stream and callback APIs

The [output stream example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/mixed.output_stream.js) send the data in the form of a string and read the resulted dataset as a stream.

```js
const transform = require('stream-transform')
const assert = require('assert')

const output = []
transform([
  ['1','2','3','4'],
  ['a','b','c','d']
], function(data){
  data.push(data.shift())
  return data
})
.on('readable', function(){
  while(row = this.read()){
    output.push(row)
  }
})
.on('error', function(err){
  console.error(err.message)
})
.on('finish', function(){
  assert.deepEqual(output, [
    [ '2', '3', '4', '1' ],
    [ 'b', 'c', 'd', 'a' ]
  ])
})
```
