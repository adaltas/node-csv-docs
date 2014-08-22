---
title: CSV Generate Examples
layout: page
tags: ['intro','page']
pageOrder: 1
---

## Using the callback API

The parser receive a string and return an array inside a user-provided
callback. This example is available with the command `node samples/callback.js`.

```javascript
var generate = require('csv-generate');

generate({seed: 1, columns: 2, length: 2}, function(err, output){
  output.should.eql('OMH,ONKCHhJmjadoA\nD,GeACHiN');
});
```

## Using the stream API

```javascript
// node samples/stream.js
var generate = require('csv-generate');

var data = []
var generator = generate({seed: 1, objectMode: true, columns: 2, length: 2});
generator.on('readable', function(){
  while(d = generator.read()){
    data.push(d);
  }
});
generator.on('error', function(err){
  console.log(err);
});
generator.on('end', function(){
  data.should.eql([ [ 'OMH', 'ONKCHhJmjadoA' ],[ 'D', 'GeACHiN' ] ]);
});
```

## Using the pipe function

One usefull function part of the Stream API is `pipe` to interact between
multiple streams. You may use this function to pipe a `stream.Readable` string
source to a `stream.Writable` object destination. The next example available as
`node samples/pipe.js` read the file, parse its content and transform it.

```javascript
// node samples/pipe.js
var generate = require('csv-generate');

var generator = generate({columns: ['int', 'bool'], length: 2});
generator.pipe(process.stdout);
```