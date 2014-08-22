---
title: CSV Parse Examples
layout: page
tags: ['intro','page']
pageOrder: 1
---

## Using the callback API

The parser receive a string and returns an array inside a user-provided
callback. This example is available with the command `node samples/callback.js`.

See the full list of supported parsing options below.

```javascript
var parse = require('csv-parse');
require('should');

var input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"';
parse(input, {comment: '#'}, function(err, output){
  output.should.eql([ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]);
});
```

## Using the stream API

The CSV parser implements the [stream.Transform`API][stream_transform].

CSV data is send through the `write` function and the resulted data is obtained
within the "readable" event by calling the `read` function. This example is
available with the command `node samples/stream.js`.

See the full list of supported parser options below.

```javascript
var parse = require('csv-parse');
require('should');

var output = [];
// Create the parser
var parser = parse({delimiter: ':'});
// Use the writable stream api
parser.on('readable', function(){
  while(record = parser.read()){
    output.push(record);
  }
});
// Catch any error
parser.on('error', function(err){
  console.log(err.message);
});
// When we are done, test that the parsed output matched what expected
parser.on('finish', function(){
  output.should.eql([
    [ 'root','x','0','0','root','/root','/bin/bash' ],
    [ 'someone','x','1022','1022','a funny cat','/home/someone','/bin/bash' ]
  ]);
});
// Now that setup is done, write data to the stream
parser.write("root:x:0:0:root:/root:/bin/bash\n");
parser.write("someone:x:1022:1022:a funny cat:/home/someone:/bin/bash\n");
// Close the readable stream
parser.end();
```

## Using the pipe function

One useful function part of the Stream API is `pipe` to interact between
multiple streams. You may use this function to pipe a `stream.Readable` string
source to a `stream.Writable` object destination. This example available as
`node samples/pipe.js` read the file, parse its content and transform it.

```javascript
var fs = require('fs');
var parse = require('csv-parse');
var transform = require('stream-transform');

var output = [];
var parser = parse({delimiter: ':'})
var input = fs.createReadStream('/etc/passwd');
var transformer = transform(function(record, callback){
  setTimeout(function(){
    callback(null, record.join(' ')+'\n');
  }, 500);
}, {parallel: 10});
input.pipe(parser).pipe(transformer).pipe(process.stdout);
```
