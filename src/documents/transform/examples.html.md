---
title: Examples
layout: page
tags: ['intro','page']
pageOrder: 1
github: 'https://github.com/wdavidw/node-stream-transform'
---

## Using the callback API

The transformer receive a string and return an array inside a user-provided
callback. This example is available with the command `node samples/callback.js`.

```javascript
var transform = require('stream-transform');
var should = require('should');

transform([
  ['1','2','3','4'],
  ['a','b','c','d']
], function(data){
  data.push(data.shift())
  return data;
}, function(err, output){
  output.should.eql([ [ '2', '3', '4', '1' ], [ 'b', 'c', 'd', 'a' ] ]);
});
```

## Using the stream API

CSV data is send through the `write` function and the resulted data is obtained
within the "readable" event by calling the `read` function. This example is
available with the command `node samples/stream.js`.

```javascript
var transform = require('stream-transform');
var should = require('should');

var output = [];
var transformer = transform(function(data){
  data.push(data.shift())
  return data;
});
transformer.on('readable', function(){
  while(row = transformer.read()){
    output.push(row);
  }
});
transformer.on('error', function(err){
  console.log(err.message);
});
transformer.on('finish', function(){
  output.should.eql([ [ '2', '3', '4', '1' ], [ 'b', 'c', 'd', 'a' ] ]);
});
transformer.write(['1','2','3','4']);
transformer.write(['a','b','c','d']);
transformer.end();
```

## Using synchronous transformation

You may run this script with the command `node samples/synchronous.js`.

The transformation function is run synchronously because is only expect one
argument, the data to be transformed. It is expected to return the transformed
data or to throw an error.

```javascript
var transform = require('stream-transform');

transform([
  ['1','2','3','4'],
  ['a','b','c','d']
], function(data){
  data.push(data.shift());
  return data.join(',')+'\n';
})
.pipe(process.stdout);

// Output:
// 2,3,4,1
// b,c,d,a
```

## Using asynchronous transformation

You may run this script with the command `node samples/asynchronous.js`.

The transformation callback is requesting two arguments, the data to transform
and the callback to call once the data is ready.

The transformation callback is exected concurrently with a maximum of 20
parallel executions.

```javascript
var transform = require('stream-transform');

transform([
  ['1','2','3','4'],
  ['a','b','c','d']
], function(data, callback){
  setImmediate(function(){
    data.push(data.shift());
    callback(null, data.join(',')+'\n');
  });
}, {parallel: 20})
.pipe(process.stdout);

// Output:
// 2,3,4,1
// b,c,d,a
```