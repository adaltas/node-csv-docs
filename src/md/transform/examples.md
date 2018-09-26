---
title: Examples
keywords: ['csv','transform', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 4
---

# Stream Transform examples

This package proposes different API flavours. Every example is available on [GitHub](https://github.com/adaltas/node-stream-transform/tree/master/samples).

## Using the stream API

In the [stream example](https://github.com/adaltas/node-stream-transform/blob/master/samples/api.stream.js), CSV data is sent through the `write` function and the resulted data is obtained
within the "readable" event by calling the `read` function.

This example is available with the command `node samples/api.stream.js`.

```javascript
const transform = require('stream-transform')
const assert = require('assert')

const output = []
const transformer = transform(function(data){
  data.push(data.shift())
  return data
});
transformer.on('readable', function(){
  while(row = transformer.read()){
    output.push(row)
  }
});
transformer.on('error', function(err){
  console.log(err.message)
});
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

## Using the callback API

In the [callback example](https://github.com/adaltas/node-stream-transform/blob/master/samples/api.callback.js), the user function shift the cells of every records.

This example is available with the command `node samples/api.callback.js`.

```javascript
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

## Defining synchronous transformations

In the [synchronous example](https://github.com/adaltas/node-stream-transform/blob/master/samples/module.sync.js), the transformation function is run synchronously because it only declares one argument, the data to be transformed. It is expected to return the transformed data or to throw an error.

This example is available with the command `node samples/module.sync.js`.

```javascript
const transform = require('stream-transform')
transform([
  ['1','2','3','4'],
  ['a','b','c','d']
], function(data){
  data.push(data.shift())
  return data.join(',')+'\n'
})
.pipe(process.stdout)
```

The output on the console will be:

```csv
2,3,4,1
b,c,d,a
```

## Defining asynchronous transformations

In the [asynchronous example](https://github.com/adaltas/node-stream-transform/blob/master/samples/module.async.js), the transformation callback declares two arguments, the data to transform and the callback to call once the data is ready. The transformation callback is executed concurrently with a maximum of 20 parallel executions.

This example is available with the command `node samples/module.async.js`.

```javascript
const transform = require('stream-transform')
transform([
  ['1','2','3','4'],
  ['a','b','c','d']
], function(data, callback){
  setImmediate(function(){
    data.push(data.shift())
    callback(null, data.join(',')+'\n')
  })
}, {
  parallel: 20
})
.pipe(process.stdout)
```

The output on the console will be:

```csv
2,3,4,1
b,c,d,a
```
